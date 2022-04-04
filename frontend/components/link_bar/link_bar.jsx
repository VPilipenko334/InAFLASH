import React from "react";
import { Link } from "react-router-dom";

const LinkBar = (props) => {
    const links = props.currentUser ? (
        <Link class="logo" to="/">InAFlash</Link>
    )
} 