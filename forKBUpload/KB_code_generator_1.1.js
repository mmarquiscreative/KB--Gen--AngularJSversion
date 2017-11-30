//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// DATA CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var dataController = (function(){
    
    //// VARIABLES ////
    
    
    //// FUNCTIONS ////
    
    
    return {
       
    }
})();



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// UI CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var UIController = (function(){
    
    //// VARIABLES ////
    var HTMLStrings= {
        ids: {
            codeLevel: '#codeLevel',
            codeLevelHTML: '#codeLevelHTML',
            compileHTML: '#compileHTML',
            resourcesList: '#resourcesList',
            fullCodeBlock: '#fullCodeBlock',
            calloutList: '#calloutList',
            calloutsDropdown: '#calloutsDropdown',
            addNewCallout: '#addNewCallout',
            calloutHeader: '#calloutHeader',
            calloutBody: '#calloutBody',
            addedCallouts: '#addedCallouts',
            footerNavOptions: '#footerNavOptions',
            nextURL: '#nextURL',
            lastURL: '#lastURL',
            courseHomeURL: '#courseHomeURL',
            URLInput: '#URLInput',
            genOverviewHeader: '#genOverviewHeader',
            genOverviewBody: '#genOverviewBody',
            sectionNum: '#sectionNum',
            saveCurrentInput:'#saveCurrentInput',
            loadLastSave: '#loadLastSave',
            previousSave: '#previousSave',
            saveCode: '#saveCode',
            previousSave: '#previousSave',
            deleteX: '#deleteX'
            
        },
        classes:{
            inputNode: '.inputNode',
            inputNodeVal: 'inputNode value',
            inputNodeTxt: 'inputNode textContent',
            inputNodeChk: 'inputNode checked',
            inputNodeSplit: 'inputNode splitString'
        },
        footerNavValues: {
            standAlone: 'standAlone',
            multiPostFirst: 'multiPostFirst',
            multiPostMid: 'multiPostMid',
            multiPostLast: 'multiPostLast',
            coursePostFirst: 'coursePostFirst',
            coursePostMid: 'coursePostMid',
            coursePostLast: 'coursePostLast'
        },
        generalOverviewHTML: 'generalSection',
        overviewFrontHTML: '<div class="overview">',
        overviewBackHTML: '</div></div>',
        sectionHTML:{
            frontHTML: '<div class="overviewOutline"><h4>Outline</h4><ol>',
            itemHTML: '<li><a href="#sectionreplace">Section replace</a></li>',
            endHTML: '</ol></div>'
        },
        codeLevels: {
            minstrel: '<!-- Code Level 1: Minstrel --><h4 class="code-level1"><strong>Code Difficulty:</strong> Minstrel</h4><div class="code-level1"></div>',
                
            knight: '<!-- Code Level 2: Knight --><h4 class="code-level2"><strong>Code Difficulty:</strong> Knight</h4><div class="code-level2"></div>',
                
            barbarian: '<!-- Code Level 3: Barbarian --><h4 class="code-level3"><strong>Code Difficulty:</strong> Barbarian</h4><div class="code-level3"></div>'
        },
        resourcesHTML: {
            indesign: '<a id="indesign" href="https://knowledgebases.wpengine.com/?s=indesign"><img class="alignnone size-full wp-image-1084" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0006_Indesign-CC.png" alt="" width="25" height="25" /></a>   ',
            illustrator: '<a id="illustrator" href="https://knowledgebases.wpengine.com/?s=illustrator"><img class="alignnone size-full wp-image-1086" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0008_Illustrator-CC.png" alt="" width="25" height="25" /></a>   ',
            photoshop: '<a id="photoshop" href="https://knowledgebases.wpengine.com/?s=photoshop"><img class="alignnone size-full wp-image-1085" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0007_Photoshop-CC.png" alt="" width="25" height="25" /></a>   ',
            mWord: '<a id="word" href="https://knowledgebases.wpengine.com/?s=word"><img class="alignnone size-full wp-image-1083" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0005_Word.png" alt="" width="25" height="25" /></a>   ',
            mExcel: '<a id="excel" href="https://knowledgebases.wpengine.com/?s=excel"><img class="alignnone size-full wp-image-1081" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0003_Excel.png" alt="" width="21" height="25" /></a>   ',
            mPPT: '<a id="powerpoint" href="https://knowledgebases.wpengine.com/?s=powerpoint"><img class="alignnone size-full wp-image-1082" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0004_Powerpoint.png" alt="" width="19" height="25" /></a>   ',
            mOutlook: '<a id="outlook" href="https://knowledgebases.wpengine.com/?s=outlook"><img class="alignnone size-full wp-image-1080" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0002_Outlook.png" alt="" width="21" height="25" /></a>   ',
            knowledgebase: '<a id="knowledgebase" href="https://knowledgebases.wpengine.com/?s=knowledgebase"><img class="alignnone size-full wp-image-1079" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0001_KB-Logo.png" alt="" width="25" height="25" /></a>   ',
            HTML: '<a id="html" href="https://knowledgebases.wpengine.com/?s=html"><img class="alignnone size-full wp-image-1078" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0000_HTML-5-logo.png" alt="" width="25" height="23" /></a>   ',
            youtube: '<a id="youtube" href="https://knowledgebases.wpengine.com/?s=youtube"><img class="alignnone size-full wp-image-1087" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0000_Youtube_logo.png" alt="" width="25" height="25" /></a>   ',
            quicktime: '<a id="quicktime" href="https://knowledgebases.wpengine.com/?s=quicktime"><img class="alignnone size-full wp-image-1109" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0008_Quicktime.png" alt="" width="25" height="25" /></a>   ',
            finder: '<a id="server" href="https://knowledgebases.wpengine.com/?s=server"><img id="finder" class="alignnone size-full wp-image-1124" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/04/icon_KB_0001_ServerFinder.png" alt="" width="25" height="25" /></a>   ',
            jig: '<a id="jig" href="https://knowledgebases.wpengine.com/?s=jig"><img class="alignnone size-full wp-image-1152" src="http://knowledgebases.wpengine.com/wp-content/uploads/2017/05/icon_KB_0000_Jig-logo.png" alt="" width="25" height="25" /></a>   ',
            frontHTML: '<div class="overviewResources"><br/><h4>Resources Used:</h4>',
        },
        calloutsHTML: {
            frontCalloutHTML: '<div class="callout-container"><div class="callout-',
            middleCalloutHTML: '"></div><div class="callout-text">',
            endCalloutHTML: '</div></div>',
            galileo: 'galileo',
            einstein: 'einstein',
            khan: 'khan',
            polo: 'polo',
            darwin: 'darwin',
            nostradamus: 'nostradamus',
            neptune: 'neptune',
            cleopatra: 'cleopatra',
            b_anthony: 'b-anthony',
            parks: 'parks',
            fawcett: 'fawcett',
            curie: 'curie',
            tubman: 'tubman',
            roosevelt: 'roosevelt',
            angelou: 'angelou',
            earhart:'earhart'
        },
        footerNavHTML: {
            standAlone: '<a class="botnav-jumptop" href="top">Return to Top</a>\n \n <hr />',
            multiPostFirst: '<div class="botnav-alpha">\n<h5><span class="botnav-pgnum">(Step X of X)</span><a class="btn" href="__">Next Step</a></h5>\n</div>\n<div class="botnav-beta" style="text-align: right;"><a href="#top">Return to Top</a></div>\n&nbsp;\n\n<hr />',
            multiPostMid:'<div class="botnav-alpha">\n<h5><a class="btn" href="__">Previous Step</a><span class="botnav-pgnum">(Step X of X)</span><a class="btn" href="__">Next Step</a></h5>\n</div>\n<div class="botnav-beta" style="text-align: right;"><a href="#top">Return to Top</a></div>\n&nbsp;\n\n<hr />',
            multiPostLast: '<div class="botnav-alpha">\n<h5>\n<a class="btn" href="__">Previous Step</a>\n<span class="botnav-pgnum">(Step X of X)</span>\n</h5>\n</div>\n<div class="botnav-beta" style="text-align: right;">\n<a href="#top">Return to Top</a></div>\n&nbsp;\n<hr />',
            coursePostFirst: '<div class="botnav-alpha">\n<h5><span class="botnav-pgnum">(Step X of X)</span><a class="btn" href="__">Next Step</a></h5>\n</div>\n<div class="botnav-beta" style="text-align: right;">\n<a href="#top">Return to Top</a> — <a href="__">Course Overview</a></div>\n&nbsp;\n\n<hr />',
            coursePostMid: '<div class="botnav-alpha">\n<h5><a class="btn" href="__">Previous Step</a><span class="botnav-pgnum">(Step X of X)</span><a class="btn" href="__">Next Step</a></h5>\n</div>\n<div class="botnav-beta" style="text-align: right;">\n<a href="#top">Return to Top</a> — <a href="__">Course Overview</a></div>\n&nbsp;\n\n<hr />',
            coursePostLast: '<div class="botnav-alpha">\n<h5>\n<a class="btn" href="__">Previous Step</a>\n<span class="botnav-pgnum">(Step X of X)</span>\n</h5>\n</div>\n<div class="botnav-beta" style="text-align: right;">\n<a href="#top">Return to Top</a> — <a href="__">Course Overview</a></div>\n&nbsp;\n\n<hr />'
        }
    };
    
    
    //// FUNCTIONS ////
    function loadFooterStates(someBoolNext, someBoolLast, someBoolCourse){
        if(someBoolNext){
            document.querySelector(HTMLStrings.ids.nextURL).className = (HTMLStrings.classes.inputNodeVal);
        } else {
            document.querySelector(HTMLStrings.ids.nextURL).className = 'hidden';
        };
        
        if(someBoolLast){
            document.querySelector(HTMLStrings.ids.lastURL).className = (HTMLStrings.classes.inputNodeVal);
        } else {
            document.querySelector(HTMLStrings.ids.lastURL).className = 'hidden';
        };
        
        if(someBoolCourse){
            document.querySelector(HTMLStrings.ids.courseHomeURL).className = (HTMLStrings.classes.inputNodeVal);
        } else {
            document.querySelector(HTMLStrings.ids.courseHomeURL).className = 'hidden';
        };
    };
    
    return {
       HTMLStrings: HTMLStrings,
        loadFooterStates: loadFooterStates
    };
})();



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// APP CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var appController = (function(dataCtrl, UICtrl){
    
    //// VARIABLES ////
    
    
    
    //// FUNCTIONS ////
    
    function listToArray(nodeList){
        var tempList, newArray;
        tempList = nodeList;
        newArray = [];
        console.log(newArray);
        
        for (i = 0; i < nodeList.length; i++){
            newArray[i] = nodeList[i];
        };
        return newArray;
    };
    
    
    /* function updateHTMLPreview(someString){
        document.querySelector(UICtrl.HTMLStrings.ids.codeLevelHTML).textContent = someString;
    };
    */
    
    function loadHTML__Sections(){
        var howMany = parseInt(document.querySelector(UICtrl.HTMLStrings.ids.sectionNum).value);
        
        var allSections = '';
        
        for (i = 0; i < howMany; i++){
            var tempString = UICtrl.HTMLStrings.sectionHTML.itemHTML;
            
            var newString = tempString.replace(/replace/g, (i + 1));
               
            allSections += newString;
        };
        
        allSections = (UICtrl.HTMLStrings.sectionHTML.frontHTML + allSections + UICtrl.HTMLStrings.sectionHTML.endHTML);
        
        return allSections;

    };
    
    function loadHTML__Callout(){
        var fullCalloutCode = '';
        var calloutNodeList = document.querySelector(UICtrl.HTMLStrings.ids.addedCallouts).children;
        var calloutArray = listToArray(calloutNodeList);
        
        calloutArray.forEach(function(cur){
            var curCalloutArray = cur.textContent.split('__');
            
            var compiledString = (UICtrl.HTMLStrings.calloutsHTML.frontCalloutHTML + curCalloutArray[0] + UICtrl.HTMLStrings.calloutsHTML.middleCalloutHTML + '<h4>' + curCalloutArray[1] + '</h4><p>' + curCalloutArray[2] + '</p>' + UICtrl.HTMLStrings.calloutsHTML.endCalloutHTML);
            
            console.log(compiledString);
            
            fullCalloutCode += compiledString;
            
        });
        
        return fullCalloutCode;
    };
    
    function resetCalloutInput(){
    document.querySelector(UICtrl.HTMLStrings.ids.calloutsDropdown).value = 'none';
        
        document.querySelector(UICtrl.HTMLStrings.ids.calloutHeader).value = '';
        
        document.querySelector(UICtrl.HTMLStrings.ids.calloutBody).value = '';
    }
    
    function compileCalloutString(){
        
        var optionNameString = document.querySelector(UICtrl.HTMLStrings.ids.calloutsDropdown).value;
        
        var calloutHeaderString = document.querySelector(UICtrl.HTMLStrings.ids.calloutHeader).value;
        
        var calloutBodyString = document.querySelector(UICtrl.HTMLStrings.ids.calloutBody).value;
        
        document.querySelector(UICtrl.HTMLStrings.ids.addedCallouts).innerHTML += ('<p class="' + UICtrl.HTMLStrings.classes.inputNodeSplit + '">' + optionNameString + '__' + calloutHeaderString + '__' + calloutBodyString + '<span id="deleteX">&#x2715;</span></p>')
        console.log(optionNameString + ' ' + calloutHeaderString + ' ' + calloutBodyString);
        
        resetCalloutInput();
    }
    
    
    function footerNavStates(whichState){
        switch (whichState){
            case 'none':
                UICtrl.loadFooterStates(false, false, false);
                break;
            case 'standAlone':
                UICtrl.loadFooterStates(false, false, false);
                break;
            case 'multiPostFirst':
                UICtrl.loadFooterStates(true, false, false);
                break;
            case 'multiPostMid':
                UICtrl.loadFooterStates(true, true, false);
                break;
            case 'multiPostLast':
                UICtrl.loadFooterStates(false, true, false);
                break;
             case 'coursePostFirst':
                UICtrl.loadFooterStates(true, false, true);
                break;
            case 'coursePostMid':
                UICtrl.loadFooterStates(true, true, true);
                break;
            case 'coursePostLast':
                UICtrl.loadFooterStates(false, true, true);
                break;
            default:
                console.log('footerNavStates not working. which state is: ' + whichState);
                break;
                          };
    };
    
    function loadHTML__GeneralOverview(){
        var overviewHeader, overviewBody;
        
        // save general overview header string
        overviewHeader = document.querySelector(UICtrl.HTMLStrings.ids.genOverviewHeader).value;
        
        // save general overview body string
        overviewBody = document.querySelector(UICtrl.HTMLStrings.ids.genOverviewBody).value;
        
        return {
            overviewHeader: overviewHeader,
            overviewBody: overviewBody
        }
    }
    
    function loadFooterNavOptions(){
        var curFooterOption = document.querySelector(UICtrl.HTMLStrings.ids.footerNavOptions).value;
        
        footerNavStates(curFooterOption);
      };
    
    function addNewCallout(){
        compileCalloutString();
    };
    
    function loadAllHTML(){
        
        // general kb post overview
        var generalOverviewStrings = loadHTML__GeneralOverview();
        
        // Overview Block Code
        var overviewFrontBlock = UICtrl.HTMLStrings.overviewFrontHTML;
        
        // sections needed
        var sectionsBlock = loadHTML__Sections();
        var resourcesBlock = loadHTML__ResourcesUsed();
        var codeLevelBlock = loadHTML__CodeLevel();
        var overviewLastBlock = UICtrl.HTMLStrings.overviewBackHTML;
        
        // Body Block Code
        var bodyInitCopy = '<hr/><br/><p>Enter KB Post Content here.</p><br/><hr/>';
        var calloutBlocks = loadHTML__Callout();
        
        // Footer Nav Block Code
        var footerNavBlock = loadHTML__FooterNav();
        
        var compiledCode = '<div id="' + UICtrl.HTMLStrings.generalOverviewHTML + '">\n<h3>' + generalOverviewStrings.overviewHeader + '</h3>\n' + generalOverviewStrings.overviewBody + '</div>'+ overviewFrontBlock + sectionsBlock + resourcesBlock + codeLevelBlock + overviewLastBlock + '<hr/><br/><br/>KB Post Content Here<br/><br/><hr/>' + calloutBlocks + footerNavBlock;
        
        document.querySelector(UICtrl.HTMLStrings.ids.fullCodeBlock).value = compiledCode;
        

    };
    
    function processFooterArray(tempFooterArray, footerTextareaArray){
        var compiledFooterArray = '';
        
        var footerURLArray = [];
        
        footerTextareaArray.forEach(function(cur){
            console.log(cur.className);
            if(cur.className === 'inputNode'){
                footerURLArray.push(cur.value);
            };
        });
        
        // add html and URL's together except last html
        
        for(i = 0; i < (tempFooterArray.length - 1); i++){
          compiledFooterArray += (tempFooterArray[i] + footerURLArray[i]); 
        };
        
        // add last html
        compiledFooterArray += tempFooterArray[(tempFooterArray.length - 1)];
        
        console.log(footerURLArray);
        console.log(tempFooterArray);
        
        console.log(compiledFooterArray);
        return compiledFooterArray;
    };
    
    function loadHTML__FooterNav(){
        
        // which type of footer nav
        var whichOption = document.querySelector(UICtrl.HTMLStrings.ids.footerNavOptions).value;
        
        
        // pull correct html string for footer nav type
        var footerHTMLString = UICtrl.HTMLStrings.footerNavHTML[whichOption];
        
        
        // split the html string pulled to prepare for adding in the URLs
       
        var tempFooterArray = footerHTMLString.split('__');
        
        console.log(UICtrl.HTMLStrings.footerNavHTML.multiPostMid);
        console.log(tempFooterArray);
        
        // pull nodeList for the URL textarea inputs present
        var tempFooterList = document.querySelector(UICtrl.HTMLStrings.ids.URLInput).children;
        
        // convert list to array
        var footerAllOptionsArray = listToArray(tempFooterList);
        
        // combine the HTML string (split into array) and the URL values of the textarea inputs
        var returnHTMLString = processFooterArray(tempFooterArray, footerAllOptionsArray);
        
        console.log(typeof(returnHTMLString[0]));
        // return the compiled string
        return returnHTMLString;
    };
    
    function loadHTML__CodeLevel(){
        var tempValue, returnHTML;
        
        tempValue = document.querySelector(UICtrl.HTMLStrings.ids.codeLevel).value;
        
        switch(tempValue){
            case 'minstrel':
                 returnHTML = UICtrl.HTMLStrings.codeLevels.minstrel;
                break;
                
            case 'knight':
                 returnHTML = UICtrl.HTMLStrings.codeLevels.knight;
                break;
                
            case 'barbarian':
               returnHTML = UICtrl.HTMLStrings.codeLevels.barbarian;
                break;
                
            case 'none':
                returnHTML = '';
                break;
                
            default:
                console.log('switch for loadHTML didnt work, tempValue was: ' + tempValue);
                break;
                        };
        return returnHTML;
        
    };
    
    function loadHTML__ResourcesUsed(){
        var checkboxList, checkboxArray;
        
        checkboxList = document.querySelector(UICtrl.HTMLStrings.ids.resourcesList).children;
        
        checkboxArray = listToArray(checkboxList);
                console.log(checkboxArray);
        
        var resourcesHTML = compileResourcesHTML(checkboxArray);
        
        var compiledResourcesHTML = UICtrl.HTMLStrings.resourcesHTML.frontHTML + resourcesHTML;
       return compiledResourcesHTML;
    };
    
    function compileResourcesHTML(resourcesArray){
        var allResourcesHTML = '';
        console.log('compileResourcesHTML runing')
        resourcesArray.forEach(function(cur){
            if(cur.localName === 'input' && cur.checked === true){
               allResourcesHTML += UICtrl.HTMLStrings.resourcesHTML[cur.name];
            };
        
        });
        return allResourcesHTML;
    };
    function checkAttribute(targetID, targetAttribute){
        var someArray = listToArray(document.querySelectorAll(targetID));
    var someArrayValues = [];
        someArray.forEach(function(cur){
            someArrayValues.push(cur[targetAttribute]);
        });
        return someArrayValues;
    };
    function saveCurInput(){
        var inputNodeArray, attributeString;
        attributeString = '';
        inputNodeArray = listToArray(document.querySelectorAll('.inputNode'));
        
        inputNodeArray.forEach(function(cur){
                              // push either value, textContent or a string to split to attributeArray
                        switch (cur.className){
                            case UICtrl.HTMLStrings.classes.inputNodeVal:
                                console.log(cur.id);
                                console.log(cur.value);
                                attributeString += '||' + cur.className + '&&&' + '#' + cur.id + '&&&' + cur.value;
                                break;
                            case UICtrl.HTMLStrings.classes.inputNodeChk:
                                console.log(cur.name);
                                console.log(cur.checked);
                                attributeString += '||' + cur.className + '&&&' + '#' + cur.id + '&&&' + cur.checked;
                                break;
                            case UICtrl.HTMLStrings.classes.inputNodeTxt:
                                console.log(cur.id);
                                console.log(cur.textContent);
                                attributeString += '||' + cur.className + '&&&' + '#' + cur.id + '&&&' + cur.textContent;
                                break;
                            case UICtrl.HTMLStrings.classes.inputNodeSplit:
                                console.log(cur.id);
                                console.log(cur.textContent.split('__'));
                                attributeString += '||' + cur.className + '&&&' + '#' + cur.id + '&&&' + cur.textContent;
                                break;
                            default:
                                console.log(cur.className);
                                break;
                            };
    });
        // remove first || to avoid having an empty first array when split during load
        attributeString = attributeString.slice(2);
        document.querySelector(UICtrl.HTMLStrings.ids.saveCode).value = attributeString;
    };
    
    function stringToBool(someString){
        var returnBool;
        if(someString === 'true'){
                returnBool = true;
            } else if (someString === 'false'){
                returnBool = false;
            };
        return returnBool;
    };
    
    function loadSavedSplitStr(someString){
       someString = someString.slice(0, -1); document.querySelector(UICtrl.HTMLStrings.ids.addedCallouts).innerHTML += ('<p class="' + UICtrl.HTMLStrings.classes.inputNodeSplit + '">' + someString + '<span id="deleteX">&#x2715;</span></p>');
    };
    
    function loadSave(){
        var inputArray = [];
        var splitString = document.querySelector(UICtrl.HTMLStrings.ids.previousSave).value;
        
        inputArray = splitString.split('||');
        
        inputArray.forEach(function(cur){
            var tempArray = cur.split('&&&');
            var whichAttribute = tempArray[0].split(' ');
            console.log(tempArray[1]);
            // check if bool, convert string to bool
            if(tempArray[2] === 'true' || tempArray[2] === 'false'){
                tempArray[2] = stringToBool(tempArray[2]);
            };
            
            if(whichAttribute[1] === 'splitString'){
                loadSavedSplitStr(tempArray[2]);
            } else if(document.querySelector(tempArray[1]).parentElement.id === 'URLInput'){
                var tempNode = document.querySelector(tempArray[1]);
                      tempNode.className = UICtrl.HTMLStrings.classes.inputNodeVal;
                tempNode.value = tempArray[2];
                
                      } else {
            document.querySelector(tempArray[1])[whichAttribute[1]] = tempArray[2];
            console.log(document.querySelector(tempArray[1])[whichAttribute[1]]);
            console.log(tempArray);
            };
        });

        
    };
    
    function deleteCallout(){
          
    }
    
    function innit(){
        document.querySelector(UICtrl.HTMLStrings.ids.compileHTML).addEventListener('click', loadAllHTML);
        
        document.querySelector(UICtrl.HTMLStrings.ids.addNewCallout).addEventListener('click', addNewCallout);
        
        document.querySelector(UICtrl.HTMLStrings.ids.footerNavOptions).addEventListener('change', loadFooterNavOptions);
        
        document.querySelector(UICtrl.HTMLStrings.ids.fullCodeBlock).addEventListener('click', function(){
            console.log(this.textContent);
           var tempNode =  document.querySelector(UICtrl.HTMLStrings.ids.fullCodeBlock)
           tempNode.select();
            document.execCommand('copy');
            console.log('click recognized');
        });
        
        document.querySelector(UICtrl.HTMLStrings.ids.saveCode).addEventListener('click', function(){
            console.log(this.textContent);
           var tempNode =  document.querySelector(UICtrl.HTMLStrings.ids.saveCode)
           tempNode.select();
            document.execCommand('copy');
            console.log('click recognized');
        });
        document.querySelector(UICtrl.HTMLStrings.ids.saveCurrentInput).addEventListener('click', saveCurInput);
        
        document.querySelector(UICtrl.HTMLStrings.ids.loadLastSave).addEventListener('click', loadSave);
        
        document.querySelector(UICtrl.HTMLStrings.ids.addedCallouts).addEventListener('click', function(target, event){
            console.log(target.target.localName);
            if(target.target.localName === 'span'){
                target.target.parentNode.outerHTML = '';
            };
        });
        
    };
    return {
       innit: innit
    };
})(dataController, UIController);




appController.innit();



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// CODE Tools >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//// XXXXXXXXXXX ////


// START... //// xxTITLExx xxDescriptionxx //////////////// M.M.

// ...END //// xxTITLExx xxDescriptionxx //////////////// M.M.

