# The cat-dog portal

## Story

Are you a cat or dog lover ?
Choose your side !
Make the perfect Cat/Dog pictures portal where you can upload and see what others have uploaded !

## What are you going to learn?

- Http GET request
- Http POST request
- Http DELETE request
- React conditional rendering
- Upload site to github pages

## Tasks

1. No matter on what page you go there is a `bootstrap` navbar with the links `Upload`, `My Images`, `Public Images`
    - The navbar is similarly styled to a `bootstrap` navbar
    - Pressing the `Upload` link changes the url to `upload` and displays only the `Upload` page
    - Pressing the `My Images` link changes the url to `my-images` and displays only the `MyImages` page
    - Pressing the `Public Images` link changes the url to `public-images` and displays only the `PublicImages` page

2. There is an upload page where the user can upload new images.
    - There is a `bootstrap` styled component with a file upload input
    - The form is centered horizontally
    - After selecting a file and pressing the `upload` button the image is uploaded to the user's account contained in the `x-api-key`
    - If the upload fails by any reasons an error message is displayed for 3 seconds after which it disappears

3. The is a page with a carousel containing all the uploaded images
    - There is a `react-responsive-carousel` which cycles through all the uploaded images
    - The carousel is centered horizontally in the page
    - Each image in the carousel has a `remove` button
    - Pressing the `remove` button only removes the currently displayed image in the slideshow
    - After deleting an image the carousel is updated not to include that images

4. There is a page where user can view public images of cats
    - The user can select through a selection input the categories offered by either the `cat` or `dog` api
    - The user can select through a selection input the number of images to display (recommended 3, 9, 15)
    - Each time any select input is changed, new images are displayed based on the selected criteria
    - When the page first loads `3` images are displayed from the first category in either `cat` or `dog` api
    - The pictures are displayed in a 3 column grid which is entered horizontally

5. The page can be accessed from a public url
    - The web page is hosted on github pages and can be accessed by anyone from a public url

## General requirements

None

## Hints

- as long as you respect the class name of `legend` inside the `react-responsive-carousel` you can change the `span` to a `button`
- in order to use the API you first need to create an account and get an `X-API-KEY` key
- you can upload pictures to you account by importing in `postman` the file `cat-api.postman_collection.json` and then in the `upload` url select from the `body` tab the image to upload. Be sure to change in the `headers` tab the `x-api-key`

## Background materials

- <i class="far fa-exclamation"></i> [The Cat API Docs](https://docs.thecatapi.com/image-upload)
- <i class="far fa-exclamation"></i> [PostMan CatApi Docs](https://documenter.getpostman.com/view/4016432/RWToRJCq#2f2ae1b4-13bf-4e1f-ae19-cc674eb7254c)
- <i class="far fa-exclamation"></i> [Example Upload File in React](https://www.pluralsight.com/guides/uploading-files-with-reactjs)
- <i class="far fa-book-open"></i> [How to get or set boundary in multipart/form-data from FormData?](https://dirask.com/questions/How-to-get-or-set-boundary-in-multipart-form-data-from-FormData-1X9JKD)
- <i class="far fa-book-open"></i> [Debugging a React project](https://blog.logrocket.com/debug-react-applications-with-the-new-react-devtools/)
