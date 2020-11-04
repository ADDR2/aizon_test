module.exports = {
    "roots": [
        "./src/tests"
    ],
    "testMatch": [
        "**/?(*.)+(integration|test).+(ts)",
    ],
    "transform": {
        "^.+\\.ts$": "ts-jest"
    },
}