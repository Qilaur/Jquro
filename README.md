# Jquro 🐈
My library for development 

# 🔺 Getting started 🔺


Main variable is $ (like in jQuery)
## **$** 
```$( string )```
>_return **this**, what allow to chain building_   
**```string```** can be DOM node or DOM selector for querySelector  
#### Examples
```
$('div.beauty');
$(document.querySelector('div.ugly'));
// chain structure
$('div').addClass('ugly-but-beauty');
```
> #### Useful to notice ❗  
> $ take **all** elements which fit the selector or   
>if you put DOM node in brackets you'll get it back

##  🔸Work with _**classes**_
>all the methods take class as string
### .addClass( class )
add clases to found elements
##### Examples  
 ``` $('div').addClass('soCoolBlock'); ```

### .delClass( class )
remove clases from found elements
##### Examples  
 ``` $('div').delClass('soBoringBlock'); ```

### .toggleClass( class )
toggle clases from found elements   
(if element has this class, .toggleClass remove it, else, add class)
##### Examples  
 ``` $('div').toggleClass('active'); ```
### .hasClass( class )
check if elements contains provided class
##### Examples  
 ``` $('div').hasClass('tengatine'); ```
hr   
## 🔸 Work with _**display**_

### .d( string )
change display to **received value**
> 🔧 _**Parameters**_  
> **_string_** - display property (like a 'flex' or 'block')
##### Examples  
 ``` $('div').d('flex'); ```
 
### .dToggle( )
toggle display property (from *none* to *block* and rather)
##### Examples  
 ``` $('div').dToggle(); ```
 
hr
## 🔸 Work with _**attributes**_
### .setAttr(attributeName, attributeValue)
set attributes to found elements
> 🔧 _**Parameters**_   
>   * _attributeName_ - name of attribute (also can be an array)   
>   * _attributeValue_ - attribute value   
> ##### Useful to notice ❗
> first parameter can be an array   
> ```$('div').setAttr(['data-source', 'src'], 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');```    
> That helps to set several attributes to the same value    
> also both parameters can be an array, this allows to set attribute to appropriate value   
> ```$('div').setAttr(['data-src', 'src', 'data-video-name'], ['youtube', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'check it']);```     
> _**Result**_:   
> _before:_
> ```
> <div>text</div>
>``` 
> _after:_
> ```
> <div data-src="youtube" src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" data-video-name="check it">text</div>
>``` 
##### Examples  
 ``` $('div').setAttr('data-source', 'youtube');
 $('div').setAttr(['data-source', 'src'], 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
 $('div').setAttr(['data-src', 'src', 'data-video-name'], ['youtube', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'check it']);
$('a').setAttr('download');
 ```   

### .removeAttr(attributeName)
remove attributes from element
> 🔧 _**Parameters**_   
>   * _attributeName_ - name of attribute (also can be an array)    
> ##### Useful to notice ❗
> first parameter can be an array   
> ```$('div').removeAttr(['data-source', 'src', 'lolWhatIsIt']);```   
> That helps to remove several attributes, probably useful :]
##### Examples  
 ``` $('div').removeAttr('data-source');    
 $('div').removeAttr(['data-source', 'src', 'lolWhatIsIt']);
 $('a').removeAttr('download');
 ```
 ## 🔸 Work with _**listeners**_
 ## .on(eventName, callbackFunction)
 add event listener to elements (addEventListener)
 > 🔧 _**Parameters**_   
>   * _eventName_ - name of the event for the listener
>   * _callbackFunction_ - callback function for the listener
##### Examples  
 ```
 $('div').on('click', switchToRussian);    
 $('div').on('mouseover', makeButtonRed);
 ```
  ## .off(eventName, callbackFunction)
 remove event listener from elements (removeEventListener)
 > 🔧 _**Parameters**_   
>   * _eventName_ - name of the event for the listener
>   * _callbackFunction_ - callback function for the listener
##### Examples  
 ```
 $('div').off('click', switchToRussian);    
 $('div').off('mouseover', makeButtonRed);
 ```
 ## .click(callbackFunction)
  set _**click**_ listener to element  (addEventListener('click', randomFunc))
 > 🔧 _**Parameters**_   
>   * _callbackFunction_ - callback function for the listener   
>   * _without parameters_ - "click on an element"
##### Examples  
 ```
 $('div').click(switchToRussian);    
 $('div').click();
 ```
