import "../Assets/SuccessIcon.css";

function Success(props) {
    return (
        <div className="success-success">
            <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 97 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M 48.5 12 C 41.38 12 34.42 14.111 28.5 18.067 C 22.579 22.023 17.965 27.645 15.24 34.223 C 12.516 40.802 11.803 48.04 13.192 55.023 C 14.581 62.007 18.01 68.421 23.044 73.456 C 28.079 78.491 34.494 81.919 41.477 83.308 C 48.46 84.697 55.699 83.984 62.277 81.26 C 68.855 78.535 74.477 73.921 78.433 68.001 C 82.389 62.08 84.5 55.12 84.5 48 C 84.5 38.452 80.707 29.296 73.956 22.544 C 67.205 15.793 58.048 12 48.5 12 V 12 Z M 65.48 40.77 L 48.5 57.72 C 46.813 59.405 44.525 60.352 42.14 60.352 C 39.755 60.352 37.468 59.405 35.78 57.72 L 31.52 53.49 C 31.24 53.21 31.018 52.878 30.867 52.513 C 30.716 52.147 30.638 51.756 30.638 51.36 C 30.638 50.964 30.716 50.573 30.867 50.207 C 31.018 49.842 31.24 49.51 31.52 49.23 C 31.8 48.95 32.132 48.728 32.497 48.577 C 32.863 48.426 33.254 48.348 33.65 48.348 C 34.046 48.348 34.437 48.426 34.803 48.577 C 35.168 48.728 35.5 48.95 35.78 49.23 L 40.01 53.49 C 40.289 53.771 40.621 53.994 40.986 54.147 C 41.352 54.299 41.744 54.377 42.14 54.377 C 42.536 54.377 42.928 54.299 43.294 54.147 C 43.659 53.994 43.991 53.771 44.27 53.49 L 61.22 36.51 C 61.5 36.23 61.832 36.008 62.197 35.857 C 62.563 35.706 62.954 35.628 63.35 35.628 C 63.746 35.628 64.137 35.706 64.503 35.857 C 64.868 36.008 65.2 36.23 65.48 36.51 C 65.76 36.79 65.982 37.122 66.133 37.487 C 66.284 37.853 66.362 38.244 66.362 38.64 C 66.362 39.036 66.284 39.427 66.133 39.793 C 65.982 40.158 65.76 40.49 65.48 40.77 V 40.77 Z"
                    fill="#34A853"
                />
            </svg>
        </div>
    );
}

Success.defaultProps = {
    className: "",
};

export default Success;
