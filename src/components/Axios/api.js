const prefix = '/lhb-manage/a/rest'; // api地址前缀
const apis = (config => {
    Object.keys(config).forEach((item) => {
        config[item] = `${prefix}${config[item]}`;
    });
    return config;
})({
    login: '/logibn',
});

export default apis;