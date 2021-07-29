const { gql } = require("apollo-server-lambda");

module.exports = gql`
	type Profile{
		seller: Seller
		buyer: Buyer
	}
	
	type User{
		id:ID!
		username: String
		profile: Profile

		createdAt: String
	}

	extend type Query{
		# getUsers:[User]
		getUser:User
	}

	extend type Mutation{
		createUser:User!
		deleteUser(id:ID!):String!
		# deactivateUser
	}	
`;
