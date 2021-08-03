const { gql } = require("apollo-server-lambda");

module.exports = gql`
	# scalar Date
	type Profile {
		seller: Seller
		buyer: Buyer
	}

	type PersonalInformation {
		firstName: String
		lastName: String
		middleInitial: String
		birthDate: Date
	}

	type User {
		id: ObjectID!
		username: String
		profile: Profile
		personalInformation: PersonalInformation

		createdAt: DateTime
	}

	input PersonalInformationInput {
		firstName: String!
		lastName: String!
		middleInitial: String
		birthDate: Date!
	}

	extend type Query {
		# getUsers:[User]
		getUser: User
	}

	extend type Mutation {
		createUser: User!
		updateUserPersonalInformation(data: PersonalInformationInput!): User!
		deleteUser(id: ID!): String!
		# deactivateUser
	}
`;
