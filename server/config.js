// Github Oauth. 
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || "37454df5e11a69f88833"
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || "952090694f312a7fe926825c12a7b82a44947940"

// Neo4j 
const NEO4j_CONNECTION_URI = process.env.NEO4j_CONNECTION_URI || "bolt://localhost:7687"
const NEO4J_USER = process.env.NEO4J_USER || "neo4j"
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || "hedonhermdev"

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'lolmao12345'

const HOST = process.env.HOST || '0.0.0.0'
const PORT = Number(process.env.PORT) || 3003

module.exports = {
    GITHUB_CLIENT_SECRET,
    GITHUB_CLIENT_ID,
    NEO4j_CONNECTION_URI,
    NEO4J_USER,
    NEO4J_PASSWORD,
    JWT_SECRET,
    HOST,
    PORT,
}
