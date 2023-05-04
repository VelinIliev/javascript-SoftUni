function requestValdator(request) {

    let {method, uri, version, message} = request;
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /^[\w.]+$/;
    let messagePattern = /^[^<>\\&\'\"]+$/;

    if (!(method && validMethods.includes(method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!(uri && (uri == '*' || uriPattern.test(uri)))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!(version && validVersions.includes(version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!(request.hasOwnProperty('message') && (message == '' || messagePattern.test(message)))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}


requestValdator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
    });