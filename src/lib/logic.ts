/**
 * Modular logic handlers for UI events.
 * Keeping logic separate from components makes them cleaner and easier to maintain.
 */

/**
 * Redirects the user to a specified URL.
 * @param url The destination URL
 */
export const handleNavigation = (url: string) => {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
};

/**
 * Specific handler for the "Get Started" button.
 */
export const handleGetStarted = () => {
  handleNavigation('https://google.com');
};

/**
 * Specific handler for the "View Docs" button.
 */
export const handleViewDocs = () => {
  handleNavigation('https://docs.nextjs.org');
};

