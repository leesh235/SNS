export const base64ToImage = (data: string, name: string) => {
    let arr: Array<string> = data.split(",");
    let mime = arr[0].match(/:(.*?);/)![1];
    let bstr = window.atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], name, { type: mime });
};
