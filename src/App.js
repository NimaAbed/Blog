import React from 'react';
import { Route, Routes } from 'react-router-dom';


import HomePage from './components/home/HomePage';
import BlogPage from './components/blog/BlogPage';
import Layout from './components/layout';
import AuthorPage from './components/author/AuthorPage';
import ScrollToTop from './components/shared/ScrollToTop';
import BlogsPage from './components/blog/BlogsPage';


function App() {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blogs' element={<BlogsPage />} />
          <Route path='/blogs/:slug' element={<BlogPage />} />
          <Route path='/authors/:slug' element={<AuthorPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
