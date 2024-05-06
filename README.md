
# Convo <img src="https://github.com/sohomofficial/convo/assets/93909798/7a82656b-80d9-454a-b2b9-01bafa7d42f3" alt="convo-icon" width="35px" align="center"/>

Make instant video calls directly in your browser with this web app. Powered by Stream for high-quality, real-time connections.

## Features

- **Authentication**: Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.

- **New Meeting**: Quickly start a new meeting, configuring camera and microphone settings before joining.

- **Meeting Controls**: Participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).

- **Exit Meeting**: Participants can leave a meeting, or creators can end it for all attendees.

- **Schedule Future Meetings**: Input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.

- **Past Meetings List**: Access a list of previously held meetings, including details and metadata.

- **View Recorded Meetings**: Access recordings of past meetings for review or reference.

- **Personal Room**: Users have a personal room with a unique meeting link for instant meetings, shareable with others.

- **Join Meetings via Link**: Easily join meetings created by others by providing a link.

- **Secure Real-time Functionality**: All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.

- **Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.

and many more, including code architecture and reusability.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file.

```bash![Uploading logo.svg…]()

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#STREAM
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

```



## Run Locally

Clone the project

```bash
  git clone https://github.com/sohomofficial/convo.git
```

Go to the project directory

```bash
  cd convo
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```


## Credits

 - [Adrian Hajdin - JS Mastery](https://github.com/adrianhajdin)
 - [Build and Deploy a Full Stack Video Conferencing App with Next JS](https://youtu.be/R8CIO1DZ2b8?si=73AU9D2-Kq95T-B8)


