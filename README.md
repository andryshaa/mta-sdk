## Usage
### MTA Class
This module is made to work with MTA resources. It can throw a request and get what the resource returned.

##### Syntax:
MTA( 'localhost', '22005', 'user', 'password' );
MTA.call(resource_name, function_name, arguments={});
### NodeJS Example
```javascript
var MTA = require('/mta/mta.js');
var myserver = new MTA('localhost', '22005', 'user', 'password'); // Connect to http://localhost:22005
var returns = await myserver.call('resource_name', 'function_name', ['arg1', 'arg2', 5, ['table']]);
console.log(returns); // ['test return']
```
### Lua example
##### server.lua
```lua
function chat ( text )
	outputChatBox( text, nil, 255, 255, 255, true )
	return 'test return'
end
```
#### meta.xml
```xml
<export function="chat" http="true" />
```