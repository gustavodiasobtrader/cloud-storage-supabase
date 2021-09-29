const fileTypeChecker = (type: string) => {
    console.log(type);

    const allowedTypes = ['png', 'jpg', 'pdf', 'mp3', 'mp4', 'doc'];

    const allowed = Boolean(allowedTypes.filter(allowedType => allowedType === type).length);

    return allowed;
}

export default fileTypeChecker;