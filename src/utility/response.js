

const response = (message,success,data)=>{
    return {
      message: message || null,
        status: success || 'success',
        data: data || null,
      };

}

export default response