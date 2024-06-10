# Password Generator Application

This project is a simple password generator built with React. The application allows users to generate random passwords with customizable options including length, inclusion of uppercase letters, numbers, and special characters.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features

- Dynamic password generation based on user-selected criteria.
- Adjustable password length using a slider.
- Options to include uppercase letters, numbers, and special characters.
- Real-time updates as options are selected or changed.
- Simple and clean user interface.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/password-generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd password-generator
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

The application should now be running on `http://localhost:3000`.

## Usage

1. Open the application in your web browser.
2. Use the slider to set the desired length of the password.
3. Select the checkboxes to include uppercase letters, numbers, and special characters as needed.
4. The generated password will be displayed in the text box.
5. To copy the password, click the "Copy" button next to the text box.

## Components

### App Component

The `App` component is the main component of the application. It includes:

- **State Management**: Uses React's `useState` hook to manage the state of `sliderValue` and `password`.
- **Password Generation**: The `generatePassword` function generates a password based on the selected criteria and updates the state.
- **Slider Change Handler**: The `sliderValueChange` function updates the `sliderValue` state and regenerates the password.
- **User Interface**: Renders the UI including the password display, copy button, slider, and checkboxes for selecting password criteria.

### Functions

- `generatePassword`: Generates a password based on the current slider value and selected options.
- `sliderValueChange`: Handles changes to the slider value and triggers password generation.

## Screenshot

![Screenshot of Password Generator](./screenshot.png)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
