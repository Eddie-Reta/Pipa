    const ValidateInput = (num) => {
        const onlyNum = /^\d*(\.\d{1,2})$/;
        const singleNum = /^\d*$/;
      
        if (num === null || num === undefined || num === "") {
            console.log(null);
        } else if (onlyNum.test(num) || singleNum.test(num)) {
            return true
        } else {
                const err = new Error(`Please enter only digits!`);
                return err;
        };
    }

    const ValidateDot = (num) => {
        const dotCheck = /\./;
       return dotCheck.test(num);
    };

    export {ValidateInput, ValidateDot};