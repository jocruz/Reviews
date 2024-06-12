### Updated `README.md` for the Reviews App

---

## Reviews App

The Reviews App provides a dynamic and interactive way to cycle through reviews using a beautifully designed UI. It utilizes React to dynamically display reviews, offering users the functionality to browse through them via next and previous buttons or jump to a random review.

### Figma Design

Explore the UI design on Figma for a visual overview of the Reviews App:
[View Design](https://www.figma.com/file/e8L2QiR4GVTa5cGuRpXtk3/Reviews?node-id=0%3A1&t=gcCYcePiKxnkJ9kH-1)

### Installation and Setup

To set up the Reviews App locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jocruz/Reviews.git
   cd Reviews
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

### Features

- **Dynamic Review Display**: Starts with the first review and allows navigation through the reviews dataset.
- **Navigation Controls**: Users can navigate through reviews using the next and previous buttons.
- **Random Review**: Includes a 'Surprise Me' button that displays a random review from the dataset.

### Technical Details

- **React Icons**: Utilize `react-icons` for stylish, responsive icons.
   ```bash
   npm install react-icons --save
   ```

- **State Management**: Uses the `useState` hook for managing the current displayed review and navigation through the review list.
- **Modular Components**: The app is built using reusable React components for each review display and navigation buttons.

### Code Snippets

```jsx
import React from 'react';
import { useState } from 'react';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    } else if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <section className='container'>
        {/* Review Card */}
      </section>
    </main>
  );
}

export default App;
```

### Links

- **GitHub Repository**: [Visit GitHub](https://github.com/jocruz/Reviews)
- **Live Demo**: [See it Live](https://gilded-moonbeam-3d4e42.netlify.app/)

---
