import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MyPortfolioItem = ({ img, title, details }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" width="200" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details.map(({ icon, title, desc }, index) => {
              return (
                <li className="modal__item" key={index}>
                  <span className="item__icon">{icon}</span>
                  <>
                    <span className="item__title">{title}</span>
                    {title === "Preview : " ? (
                      <Link to={desc} target="_blank">
                        Demo
                      </Link>
                    ) : (
                      <span className="item__desc">{desc}</span>
                    )}
                  </>
                </li>
              );
            })}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MyPortfolioItem;
