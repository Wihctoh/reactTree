# ReactTree

ReactTree is a project designed to fetch data from a server using OpenAPI (Swagger) documentation and display it as a nested tree of elements in a React interface. The main goal of the project is to provide users with the ability to create, update, and delete each tree element by its unique identifier (ID).

## Features

- **Data Retrieval**: ReactTree uses OpenAPI (Swagger) documentation to establish a connection with the server and retrieve data presented in a hierarchical structure. These data are displayed as a nested tree of elements.

- **Nested Tree Display**: Data obtained from the server is automatically displayed as a tree of elements in the React interface. Each tree element is represented by a corresponding React component.

- **Element Creation**: Users can create new elements by selecting a parent element in the tree, specifying the necessary attributes, and sending the data to the server to create a new element.

- **Element Updates**: The ability to update existing elements by editing and sending modified data to the server.

- **Element Deletion**: Users can delete elements from the tree by selecting the element and confirming the deletion. Deletion is also sent to the server to update the data.

## Technical Details

- React is used for creating the user interface.
- Libraries like Axios can be used for sending HTTP requests to interact with the server.
- OpenAPI (Swagger) documentation is used to define the data structure and server endpoints.
- Local component state (useState) and prop passing between components are used for managing component state.

## Advantages

- Convenient handling of server data presented as a tree.
- An interface that is easily adaptable and extendable to meet user needs.
- The ability to manage elements by creating, updating, and deleting them.

## Getting Started

To get started with ReactTree, follow these steps:

1. Clone this repository to your local machine. `https://github.com/Wihctoh/reactTree.git`
2. Go to the `cd client`
3. Install the required dependencies using `npm install`
4. Update the OpenAPI (Swagger) documentation URL in the code to match your server's documentation.
5. Run the application using `npm run dev` 
