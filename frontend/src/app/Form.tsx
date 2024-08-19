"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { Box, Input, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

type Inputs = {
  title: string;
  date: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log(data);

  console.log(watch("title")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    < form onSubmit={handleSubmit(onSubmit)} >
      <Box sx={{
        display: "grid",
        gridTemplateColumns: "max-content minmax(auto, 400px)",
        gap: 2,
        rowGap: 2,
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
      }}>
        <Typography variant="h3" sx={{
          gridColumn: "span 2",
          textAlign: "center",
          padding: "2rem",
        }}>TODOを作成する</Typography>
        <Box sx={{
          gridColumn: "span 2",
          display: "grid",
          gridTemplateColumns: "subgrid",
          gridTemplateRows: "auto 18px",
          rowGap: 1,
          alignItems: "center",
        }}>
          <Typography variant="subtitle1">タイトル</Typography>
          <TextField label="Title" variant="outlined" {...register("title", { required: true })} />
          {errors.title && <Typography variant="subtitle2" sx={{ gridColumn: 2, color: red.A400 }}>必須です</Typography>}
        </Box>
        <Box sx={{
          gridColumn: "span 2",
          display: "grid",
          gridTemplateColumns: "subgrid",
          gridTemplateRows: "auto 18px",
          rowGap: 1,
          alignItems: "center",
        }}>
          <Typography variant="subtitle1">日付</Typography>
          <TextField label="yyyy/mm/dd" variant="outlined" {...register("date", { required: true })} />
          {errors.date && <Typography variant="subtitle2" sx={{ gridColumn: 2, color: red.A400 }}>必須です</Typography>}
        </Box>
        <Button type="submit" variant="contained" sx={{ gridColumn: "span 2" }}>
          作成する
        </Button>
      </Box>
    </form >
  );
}
