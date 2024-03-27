# Sample IMX passport

## How to run
Note: Replace client id, redirectUri, logoutRedirectUri in src/App.tsx
- Clone this project
- Run `npm i && npm run dev`
- Open `http://localhost:5173`
- Click on Login button


## Expected result
- Display Passport login

## Actual result
- Exception `Uncaught (in promise) Error: No window.opener. Can't complete notification.`
- Lots of `Third-party cookie will be blocked. Learn more in the Issues tab.` warning