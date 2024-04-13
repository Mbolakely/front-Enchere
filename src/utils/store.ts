interface Author {
  id: number;
  name: { [key: string]: string };
}

interface Book {
  id: number;
  title: { [key: string]: string };
  authorId: number;
}

export interface MultilingualDatabase {
  authors: Author[];
  books: Book[];
}

export const initialData: MultilingualDatabase = {
  authors: [
    { id: 1, name: { en: "Author 1", fr: "Auteur 1" } },
    { id: 2, name: { en: "Author 2", fr: "Auteur 2" } },
  ],
  books: [
    { id: 1, title: { en: "Book 1", fr: "Livre 1" }, authorId: 1 },
    { id: 2, title: { en: "Book 2", fr: "Livre 2" }, authorId: 2 },
  ],
};

// Serialize initial data to JSON and store in localStorage
export const datum =  localStorage.setItem("multilingualDatabase", JSON.stringify(initialData));

// Retrieve data from localStorage and parse JSON
export const storedData = localStorage.getItem("multilingualDatabase");
const multilingualDatabase: MultilingualDatabase = storedData ? JSON.parse(storedData) : initialData;

// Usage example
console.log(multilingualDatabase.authors);
console.log(multilingualDatabase.books);
