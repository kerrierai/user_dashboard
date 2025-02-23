"use client";

import React, { useState, FC, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, TextField, InputAdornment } from "@mui/material";

interface SearchFieldProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchField: FC<SearchFieldProps> = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500);
    return () => clearTimeout(debounce);
  }, [inputValue, setSearchQuery]);

  const handleClearSearch = () => {
    setInputValue("");
    setSearchQuery("");
  };

  return (
    <Box sx={{ "& .MuiInputBase-root": { maxWidth: "200px" } }}>
      <TextField
        placeholder="Search by name"
        value={inputValue}
        size="small"
        onChange={(e) => setInputValue(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: inputValue.length > 0 && (
              <InputAdornment position="end">
                <ClearIcon
                  fontSize="inherit"
                  onClick={handleClearSearch}
                  sx={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default SearchField;
