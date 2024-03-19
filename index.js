const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

      type Book {
          title: String
          author: String
      }

      type Query {
           books: [Book]
      }
`;
const books = [
    {
      title: '吾輩は猫である',
      author: '夏目 漱石',
    },
    {
      title: '坊っちゃん',
      author: '夏目 漱石',
    },
  ];
  const resolvers = {
    Query: {
      books: () => books,
    },
  };
  const server = new ApolloServer({ typeDefs, resolvers  });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});