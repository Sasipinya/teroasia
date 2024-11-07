

export const  NumberFormat = (num: number) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1).toLocaleString() + 'k'+" ครั้ง";
    } else {
        return num+" ครั้ง";
    }
}

