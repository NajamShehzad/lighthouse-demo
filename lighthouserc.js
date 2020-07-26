module.exports = {
    ci: {
        collect: {
            numbersOfRun: 3,
            staticDistDir: "./build"
        },
        assert: {
            assertions: {
                "first-contentful-paint": ["warn", { maxNumericValue: 5000 }]
            },
        },
        upload: {
            target: "temporary-public-storage"
        }
    }
}