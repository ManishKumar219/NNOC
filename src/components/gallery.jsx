import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Dialog,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Your Worker endpoint
const WORKER_LIST_URL = "https://r2-worker.photoslisting.workers.dev";

// Blurred placeholder (base64 1×1 grey pixel)
const BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=";

export default function AdvancedGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [error, setError] = useState(null);

  // For lazy loading
  const imageRefs = useRef({}); // store DOM references to thumbnails
  const loadedImages = useRef({}); // keep track of loaded images

  // ⬇ Fetch images from Worker
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(WORKER_LIST_URL);
        if (!res.ok) throw new Error("Failed to load image list");

        const list = await res.json();

        // ⭐ NEW — filter only image files based on extension OR MIME
        const filtered = list.filter((file) => {
          if (!file.name) return false;

          const name = file.name.toLowerCase();

          // Check extension manually
          const extOK =
            name.endsWith(".jpg") ||
            name.endsWith(".jpeg") ||
            name.endsWith(".png") ||
            name.endsWith(".webp") ||
            name.endsWith(".gif");

          if (!extOK) {
            console.warn("Skipping non-image file:", file.name);
            return false;
          }

          return true;
        });

        const normalized = filtered.map((it) => ({
          name: it.name,
          url: it.url,
        }));

        setImages(normalized);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch or validate images");
      } finally {
        setLoading(false);
      }
    })();
  }, []);


  // ⬇ Lazy loading using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            loadedImages.current[id] = true; // mark loaded
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    images.forEach((_, i) => {
      const ref = imageRefs.current[i];
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [images]);

  // ⬇ Preload next & previous in background
  const preloadNeighbors = (index) => {
    const preload = (i) => {
      if (!images[i]) return;
      const img = new Image();
      img.src = images[i].url;
    };

    preload(index + 1 < images.length ? index + 1 : 0);
    preload(index - 1 >= 0 ? index - 1 : images.length - 1);
  };

  // ⬇ Open modal
  const openImage = (index) => {
    setSelectedIndex(index);
    preloadNeighbors(index);
  };

  // Close modal
  const closeImage = () => setSelectedIndex(null);

  // Navigation
  const next = () => {
    setSelectedIndex((i) => {
      const nextIndex = i < images.length - 1 ? i + 1 : 0;
      preloadNeighbors(nextIndex);
      return nextIndex;
    });
  };
  const prev = () => {
    setSelectedIndex((i) => {
      const prevIndex = i > 0 ? i - 1 : images.length - 1;
      preloadNeighbors(prevIndex);
      return prevIndex;
    });
  };

  // ⬇ Keyboard navigation
  const handleKey = useCallback(
    (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeImage();
    },
    [selectedIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <Box sx={{ p: 3, minHeight: "70vh" }}>
      <h1 className='ptc text-center p-4'>Gallery</h1>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Error message */}
      {error && (
        <Typography color="error" textAlign="center" mb={2}>
          {error}
        </Typography>
      )}

      {/* Masonry auto-fit grid */}
      <Box
        sx={{
          columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
          columnGap: "16px",
        }}
      >
        {images.map((img, i) => {
          const isLoaded = loadedImages.current[i];

          return (
            <Card
              key={i}
              sx={{
                mb: 2,
                borderRadius: 2,
                overflow: "hidden",
                breakInside: "avoid",
                opacity: isLoaded ? 1 : 0.7,
                transition: "opacity 0.4s ease",
              }}
            >
              <CardActionArea onClick={() => openImage(i)}>
                <img
                  ref={(el) => (imageRefs.current[i] = el)}
                  data-id={i}
                  src={isLoaded ? img.url : BLUR_PLACEHOLDER}
                  alt={img.name}
                  style={{
                    width: "100%",
                    display: "block",
                    filter: isLoaded ? "blur(0px)" : "blur(10px)",
                    transition: "filter 0.4s ease",
                  }}
                  onError={(e) => {
                    e.currentTarget.src = BLUR_PLACEHOLDER;
                  }}
                />
              </CardActionArea>
            </Card>
          );
        })}
      </Box>

      {/* Modal viewer */}
      <Dialog
        open={selectedIndex !== null}
        onClose={closeImage}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          sx: {
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        {selectedIndex !== null && (
          <Box sx={{ textAlign: "center", position: "relative", p: 3, height: "70vh" }}>
            {/* Close */}
            <IconButton
              onClick={closeImage}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "white",
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>

            {/* Prev */}
            <IconButton
              onClick={prev}
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                color: "white",
              }}
            >
              <ArrowBackIosNewIcon fontSize="large" />
            </IconButton>

            {/* Next */}
            <IconButton
              onClick={next}
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                color: "white",
              }}
            >
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>

            <img
              src={images[selectedIndex].url}
              alt={images[selectedIndex].name}
              style={{
                borderRadius: 8,
                objectFit: "fit",
              }}
              className="h-100"
            />

            {/*<Typography sx={{ mt: 2, color: "white" }}>
              {images[selectedIndex].name}
             </Typography> */}
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
