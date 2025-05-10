module.exports = function (api) {
    api.cache(true);
    return {
        plugins: [
            [
                require.resolve('babel-plugin-module-resolver'),
                {
                    root: ['./src/'],
                    alias: {                        
                        '@': './src',
                        '@assets': './src/assets',
                        '@pages': './src/pages',
                        '@services': './src/services',
                        '@styles': './src/styles',
                    }
                },
            ]
        ]
    };
};