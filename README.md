# Setup Project
- Setup create-react-app
- Configure Tailwind

# Project Features
- Build a Header (containing logo & nav items)
- Build a Streaming portion (contains an image, a registration form)
- After Login
    - Below Streaming -> List of movie types
    - Each movie type containing several movie
    - These are scrollable vertically


# Building Process/Steps
- Header Completed (with svg logo & nav items)
- Streaming Completed (with StreamingImage & Login form)
- Login form completed
- Create user/Login user using local storage
- Routing configuration done




- Component Flow for Browse
    - Browse
        - Browse Header

        - Movie Container

            - Playing Movie Container
                - Background Movie Video
                - Background Movie Details

            - Movie List Container
                - Movie List
                    - Movie Card

        - Movie Footer


1. GptSlice added
2. SearchGpt component build including SearchBar and SearchResult Component
3. AI Integration done.
4. SearchBar component call gemini api and then provide movie name. Then added to redux store as searchResult and previousSearchResult
5. On SearchBar cleanup function added for clearing searchResult from redux store while unmounting.
6. Some cleanup function introduces for BackgroundMovie conmonent for stoping the video while unmounting.
7. Toggle functionality built between Home Button and GPT Search Button.

8. SearchBar component build.
9. Fetch movie using normal js fn not using custom hook.
10. Learn about Unmount logic without dependency array.
11. Swap Reducer function with condition for safe unmounting.
12. Build SearchResult component.
