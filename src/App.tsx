import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import DeletePostPage from "./pages/DeletePostPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/posts"
          element={<PostsPage />}
        />

        <Route
          path="/posts/create"
          element={<CreatePostPage />}
        />

        <Route
          path="/posts/:id"
          element={<PostDetailsPage />}
        />

        <Route
          path="/posts/:id/edit"
          element={<EditPostPage />}
        />

        <Route
          path="/posts/:id/delete"
          element={<DeletePostPage />}
        />

        <Route
          path="/users"
          element={<UsersPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  );
}

export default App;