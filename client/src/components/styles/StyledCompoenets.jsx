import { styled } from "@mui/material"
import {Link as LinkComponent} from "react-router-dom"

export const VisuallyHiddenInput = styled("input")({
    border: "none",
    clip: "rect(1px, 1px, 1px, 1px)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0px",
    position: "absolute",
    whiteSpace: "nowrap",
    width:1

})

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    &:hover{
        background-color: rgba(0,0,0,0.1);
    }   
`