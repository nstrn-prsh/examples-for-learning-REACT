import React from "react";
import { useRouters } from "hookrouter";
import Blog from "./Main/Blog/Blog";
import Post from "./Main/Post/Post";
import NotFound from "./Main/NotFound/NotFound";
import Skills from './Main/Skills/Skills';

const routes = {
     "/": () => <Skills />,
     "/blog": () => <Blog />,
     "/post/:id": ({ id }) => <Post id={id} />,
};

const Page = () => {
     const match = useRouters(routes);
     return match || <NotFound />;
};

export default Page;
