export default function loaderAction(isLoading) {
    return {
        type: 'LOAD',
        payload: isLoading
    };
}
