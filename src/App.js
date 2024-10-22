import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { PostsList } from './features/posts/PostsList.js'
import { AddPostForm } from './features/posts/AddPostForm.js'
import { Navbar } from './app/Navbar.js'
import {SinglePostPage} from './features/posts/SinglePostPage.js'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact path="/"
            render={() => (<> 
            <AddPostForm />
            <PostsList /> </>
              // <section>
              //   <h2>Welcome to the Redux Essentials example app!</h2>
              // </section>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
