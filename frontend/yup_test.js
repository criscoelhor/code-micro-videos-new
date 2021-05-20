const yup = require('yup');

//{name: '', description: ''}

const schema = yup.object().shape({
    name: yup
        .string()
        .required()
});

schema
    .isValid({name: 'teste'})
    .then(isValid => console.log(isValid));