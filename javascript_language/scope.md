# javascript scope

## Global & Local

### simple global and local variable

  normal define of global variable and local variable

    var g = "global variable";

    function fun() {
        var l = "local variable";
    
        log(g);
        log(l);
    }

    fun();

    log("global outside function:", g);
    log("local outside function:", l); 
    
  define variable without *var* keyword
    
    g = 1; //this is global

    function fun() {
        var l = 2;
        g_2 = 3; //this is global too
        
        log("global in function:", g);
        log("local in function:", l);
        log("global defined inside function", g_2);
    }

    fun();

    log("global outside function:", g);
    //log("local outside function:", l); 
    log("g_2 outside function:", g_2);

  `function` has the same scope as `variable`
  
    function g_fun() {
        var l = "local variable";
        log("inside global function");
    
        function l_fun() {
            log("inside nested local function");
        
            log("access outter local variable: ", l);
        }
    
        l_fun();
    }
    
    g_fun();

  nested functions have access to each other
  
    function g_fun() {
        var l = "local variable";
        log("inside global function");
        
        function l_fun() {
            log("inside nested local function 1");
            
            log("access outter local variable: ", l);
        }
        
        function l2_fun() {
            log("inside another nested function");
            
            log("I can access other local functions too");
            
            l_fun();
        }
        
        l2_fun();
    }

    g_fun();

### scope chain




### Hoisting

    function g_fun() {
        var l = "local variable";
        log("inside global function");
        
        function l_fun() {
            log("inside nested local function 1");
            
            log("can not access inner function before it is defined");
            
            l2_fun();
            
            log("access outter local variable: ", l);
        }
        
        l_fun();
    
        function l2_fun() {
            log("inside another nested function");
            
            log("I can access other local functions too");
        }
        
    }
    
    g_fun();
