import { Validator } from 'vee-validate'

const rule2 = {
	validate(value) {
		console.log( "rule2.validate", value );
		
		// ?
        return new Promise(resolve => {
            resolve({
                valid: (value === "1"), //有效的判断
                data: value === "2" ? undefined : {
                    message: '3.message:rule2,特殊'
                }
				
            });
        })
    },
    getMessage(field, params, data) {
		// data 就是固有格式（套路）
		console.info( "rule2.getMessage", field, params, data, data.message );
        return (data && data.message) || '2.message:rule2.常规';
    }
};
Validator.extend('ruleB', rule2);

// 自定义规则-1
const rule1 = {
    messages: {
        en:(field, args) => field + '必须是11位手机号码',
    },
    validate: (value, args) => {
		
		// boolean
		return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
    }
};
Validator.extend('ruleA', rule1);

// 通过实例验证规则

// 自定义错误消息
const dictionary = {
    en: {
        messages: {
            rule1: () => '自定义错误消息-en'
        }
    },
    cn: {
        messages: {
            rule1: () => '自定义错误消息-cn'
        }
    }
};
Validator.updateDictionary(dictionary);