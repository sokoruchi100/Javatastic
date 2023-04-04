export const questionBank = [
{    
    question: `What does the following code print?`,
    code: `System.out.println(2 % 3);`,   
    options: [`2`, `0`, `3`, `1`, `None of the above`],
    answer: 0,
    unit: 1,
    explanation: `Whenever the first number is smaller than the second, the remainder is the first number. Remember that % is the remainder and 3 goes into 2 0 times with a remainder of 2.`
},
{    
    question: `What are the values of x, y, and z after the following code executes?`,
    code: `int x = 3;
    int y = x;
    int z = x * y;
    x++;`,   
    options: [`x = 3, y = 3, z = 9`, `x = 4, y = 3, z = 9`, `x = 0, y = 3, z = 0`, `x = 4, y = 4, z = 9`, `None of the above`],
    answer: 1,
    unit: 1,
    explanation: `First x is set to 3, then y is also set to 3, and next z is set to 3 * 3 = 9. Finally x is incremented to 4.`
},
{    
    question: `Consider the following class. Which of the following code segments would successfully create a new Movie object?`,
    code: `public class Movie
    {
        private String title;
        private String director;
        private double rating;
        private boolean inTheaters;
    
        public Movie(String t, String d, double r)
        {
            title = t;
            director = d;
            rating = r;
            inTheaters = false;
        }
    
        public Movie(String t)
        {
            title = t;
            director = "unknown";
            rating = 0.0;
            inTheaters = false;
        }
    }`,   
    options: [`Movie one = new Movie("Harry Potter", “Bob”);`, `Movie two = new Movie(“Sponge Bob”);`, `Movie three = new Movie(title, rating, director);`, `Movie four = new Movie("My Cool Movie", "Steven Spielberg", “4.4”);`, `Movie five = new Movie(t);`],
    answer: 1,
    unit: 2,
    explanation: `This Movie class only takes either 1 String argument or 2 String and 1 double arguments.`
},
{    
    question: `Assume that SomeClass and MainClass are properly defined in separate files. What is the output of main()?`,
    code: `class SomeClass
    {
        int someVar;
    }
    
    public class MainClass
    {
        public static void main(String[] args)
        {
            SomeClass x = new SomeClass();
            System.out.println(x.someVar);
        }
    }`,   
    options: [`unknown value`, `0`, `compile error`, `runtime error`, `None of the above`],
    answer: 1,
    unit: 2,
    explanation: `Classes without a constructor are automatically given an no-argument constructor. ints get initialized to 0 by default if not explicitly initialized.`
},
{    
    question: `Which of the following expressions is equivalent to !(c || d) ?`,
    code: ``,   
    options: [`(!c) && (!d)`, `(c || d)`, `(c && d)`, `!(c && d)`, `(!c) || (!d)`],
    answer: 0,
    unit: 3,
    explanation: `You need to negate the values of c and d. NOTing (negating) an OR expression is the same as the AND of the individual values NOTed (negated). See DeMorgans laws.`
},
{    
    question: `What would the following print?`,
    code: `int x = 3;
    int y = 2;
    if (y / x > 0) 
        System.out.print("first ");
        System.out.print("second ");`,   
    options: [`first`, `second`, `first second`, `Nothing will be printed`, `None of the above`],
    answer: 1,
    unit: 3,
    explanation: `The first will not print because integer division will mean that y / x is 0. The second will print since it is not in the body of the if (it would be if there were curly braces around it).`
},
{    
    question: `How many stars are output when the following code is executed?`,
    code: `for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++)
            System.out.println("*");
        }`,   
    options: [`10`, `5`, `25`, `50`, `15`],
    answer: 2,
    unit: 4,
    explanation: `The first loop will execute 5 times, and for each time through, the second loop will execute 5 times. So the answer is the number of times through the first loop times the number of times through the second.`
},
{    
    question: `What are the values of var1 and var2 after the following code segment is executed and the while loop finishes?`,
    code: `int var1 = 0;
    int var2 = 2;
    while ((var2 != 0) && ((var1 / var2) >= 0)) {
        var1 = var1 + 1;
        var2 = var2 - 1;
    }`,   
    options: [`var1 = 0, var2 = 2`, `var1 = 1, var2 = 1`, `var1 = 3, var2 = -1`, `var1 = 2, var2 = 0`, `The loop won't finish executing because of a division by zero.`],
    answer: 3,
    unit: 4,
    explanation: `The loop starts with var1=0 and var2=2. The while checks that var2 isn't 0 and that var1/var2 is greater than or equal to zero (0/2=0) so this is equal to zero and the body of the while loop will execute. The variable var1 has 1 added to it for a new value of 1. The variable var2 has 1 subtracted from it for a value of 1. At this point var1=1 and var2=1. The while condition is checked again. Since var2 isn't 0 and var1/var2 (1/1=1) is >=0 so the body of the loop will execute a second time. The variable var1 has 1 added to it for a new value of 2. The variable var2 has 1 subtracted from it for a value of 0. At this point var1=2 and var2=0. The while condition is checked again. Since var2 is zero the while loop stops and the value of var1 is 2 and var2 is 0.`
},
{    
    question: `The Liquid class will contain two double attributes for a liquid's boiling point temperature and freezing point temperature. The class will also contain a constructor.`,
    code: `public class Liquid
    {
        /* missing code */
    }
    Which of the following replacements for /* missing code */ is the most appropriate 
    implementation of the class?`,   
    options: [`private double boilingPoint;
    private double freezingPoint;
    public Liquid(double boilingPoint, double freezingPoint)
    { /* implementation not shown */ }`, `
    private double boilingPoint;
    private double freezingPoint;
    private Liquid(double boilingPoint, double freezingPoint)
    { /* implementation not shown */ }`, `public double boilingPoint;
    public double freezingPoint;
    private Liquid(double boilingPoint, double freezingPoint)
    { /* implementation not shown */ }`, `var1 = 2, var2 = 0`, `public double freezingPoint;
    public double boilingPoint;
    public Liquid(double freezingPoint, double boilingPoint)
    { /* implementation not shown */ }`],
    answer: 0,
    unit: 5,
    explanation: `The instance variables should be private and the constructor and methods should be public.`
},
{    
    question: `Consider the following class definitions and the code segment that comes after, which appears in a class other than Party or PartyOptions.`,
    code: `public class Party
    {
        private String partyHost;
        private int monthOfParty;
        private int partyStartTime;
    
        public Party (String h, int month, int startTime)
        {
            partyHost = h;
            monthOfParty = month;
            partyStartTime = startTime;
        }
    
        public int getMonth()
        {
            return monthOfParty;
        }
    
        public int getStartTime()
        {
            return partyStartTime;
        }
    
        public String getHost()
        {
            return partyHost;
        }
    
        public void addToOptions(PartyOptions o)
        {
            o.addParty(this);
        }
    }
    
    public class PartyOptions
    {
        private int onlyThisMonth;
    
        public PartyOptions(int month)
        {
            onlyThisMonth = month;
        }
    
        /* A Party should only be added to this PartyOption if the party's month matches onlyThisMonth */
        public void addParty(Party p)
        {
            if (p.getMonth() == onlyThisMonth)
            {
                System.out.print("Party by " + p.getHost() + " accepted; ");
            }
            else
            {
                System.out.print("Party by " + p.getHost() + " rejected; ");
            }
        }
    }
    /* Somewhere, in another class */
    Party p1 = new Party("Kerry", 10, 7);
Party p2 = new Party("Jules", 9, 6);

PartyOptions options = new PartyOptions(10);
p1.addToOptions(options);
p2.addToOptions(options);`,   
    options: [`Party by Kerry rejected; Party by Jules rejected;`, `Party by Kerry rejected; Party by Jules accepted;`, `Party by Kerry accepted; Party by Jules rejected;`, `Party by Kerry accepted; Party by Jules accepted;`, `None of the above`],
    answer: 2,
    unit: 5,
    explanation: `Kerry's party is accepted because it is in the 10th month, and Jules' party is not.`
},
{    
    question: `Which of the following statements is a valid conclusion. Assume that variable b is an array of k integers and that the following is true:`,
    code: `b[0] != b[i] for all i from 1 to k-1`,   
    options: [`The value in b[0] does not occur anywhere else in the array`, `Array b is sorted`, `Array b is not sorted`, `Array b contains no duplicates`, `The value in b[0] is the smallest value in the array`],
    answer: 0,
    unit: 6,
    explanation: `The assertion denotes that b[0] occurs only once, regardless of the order or value of the other array values.`
},
{    
    question: `Consider the following data field and incomplete method, partialSum, which is intended to return an integer array sum such that for all i, sum[i] is equal to arr[0] + arr[1] + ... + arr[i]. For instance, if arr contains the values {1, 4, 1, 3}, the array sum will contain the values {1, 5, 6, 9}. Which of the following is true about the two implementations of missing code on line 9 that are proposed?`,
    code: `private int[] arr;
    public int[] partialSum() {
       int[] sum = new int[arr.length];
       for (int j = 0; j < sum.length; j++)
          sum[j] = 0;
       /* missing code */
       return sum;
    }
    Implementation 1
    for (int j = 0; j < arr.length; j++)
        sum[j] = sum[j - 1] + arr[j];
    Implementation 2
    for (int j = 0; j < arr.length; j++)
       for (int k = 0; k <= j; k++)
          sum[j] = sum [j] + arr[k];`,   
    options: [`Both implementations work as intended and are equally fast.`, `Both implementations work as intended, but implementation 1 is faster than implementation 2.`, `Both implementations work as intended, but implementation 2 is faster than implementation 1.`, `Implementation 1 does not work as intended, because it will cause an ArrayIndexOutOfBoundsException.`, `Implementation 2 does not work as intended, because it will cause an ArrayIndexOutOfBoundsException.`],
    answer: 3,
    unit: 6,
    explanation: `When j is 0, sum[j-1] will be sum[-1] which will cause an ArrayIndexOutOfBoundsException.`
},
{    
    question: `What is printed as a result of executing the following code segment?`,
    code: `List<Integer> list1 = new ArrayList<Integer>();
    list1.add(new Integer(1));
    list1.add(new Integer(2));
    list1.add(new Integer(3));
    list1.set(2, new Integer(4));
    list1.add(2, new Integer(5));
    list1.add(new Integer(6));
    System.out.println(list1);`,   
    options: [`[1, 2, 3, 4, 5]`, `[1, 2, 4, 5, 6]`, `[1, 2, 5, 4, 6]`, `[1, 5, 2, 4, 6]`, `none of the above`],
    answer: 2,
    unit: 7,
    explanation: `The add method that takes just an object as a parameter adds that object to the end of the list. The set replaces the value at that index with the new value. The add with parameters of an index and an object puts the passed object at that index and moves any existing values by one index to the right (increments the index).`
},
{    
    question: `What is printed when the following main method is executed?`,
    code: `public class DivisibleBy2or3
    {
        private static boolean divCheck(int n)
        {
            if(n % 2 == 0 || n % 3 == 0)
            {
              return true;
            }
            return false;
        }
    
        public static void main(String[] args)
        {
            int[] arr = {6,7,17,3,2,9,1,5};
            for (int i = 0; i < arr.length; i++)
            {
                if(divCheck(arr[i]))
                {
                    int temp = arr[0];
                    arr[0] = arr[i];
                    arr[i] = temp;
                }
            }
            for (int t = 0; t < arr.length; t++)
            {
                System.out.print((arr[t]) + " ");
            }
        }
    }`,   
    options: [`6 7 17 3 2 9 1 5`, `9 6 3 2 3 1 5 17`, `5 1 2 3 6 17 7 9`, `9 7 17 6 3 2 1 5`, `none of the above`],
    answer: 3,
    unit: 7,
    explanation: `This is the correct answer, because the divCheck method is checking to see if the values in the array are divisible by 2 or 3. If they are, they are swapped with the value at the first position (index 0).`
},
{    
    question: `Given the following code segment, what is the value of sum after this code executes?`,
    code: `int[][] matrix = { {1,1,2,2},{1,2,2,4},{1,2,3,4},{1,4,1,2}};
    int sum = 0;
    int col = matrix[0].length - 2;
    for (int row = 0; row < 4; row++)
    {
       sum = sum + matrix[row][col];
    }`,   
    options: [`4`, `8`, `9`, `12`, `10`],
    answer: 1,
    unit: 8,
    explanation: `Since col is matrix[0].length - 2 it is 4 - 2 which is 2. This code will loop through all the rows and add all the numbers in the third column (index is 2) which is 2 + 2 + 3 + 1 which is 8.`
},
{    
    question: `A two-dimensional array, imagePixels, holds the brightness values for the pixels in an image. The brightness can range from 0 to 255. What does the following method compute?`,
    code: `public int findMax(int[][] imagePixels) {
        int r, c;
        int i, iMax = 0;
        for (r = 0; r < imagePixels.length; r++) {
           for (c = 0; c < imagePixels[0].length; c++) {
              i = imagePixels[r][c];
              if (i > iMax)
                 iMax = i;
            }
         }
         return iMax;
      }`,   
    options: [`The maximum brightness value for all pixels in imagePixel`, `The column with the greatest brightness sum`, `The most frequent brightness value in imagePixels`, `The row with the greatest brightness sum`, `The sum of the total brightness of imagePixels`],
    answer: 0,
    unit: 8,
    explanation: `The method works by scanning all the pixels in imagePixels and comparing them to the current iMax value. If the current is greater, it replaces iMax and becomes the new maximum brightness. This is the value that is returned.`
},
{    
    question: `Given the following class declarations, what is the output from Student s1 = new GradStudent(); followed by s1.getInfo();?`,
    code: `public class Student {
        public String getFood() {
           return "Pizza";
        }
        public String getInfo()  { 
           return this.getFood(); 
        }
     }
     public class GradStudent extends Student {
        public String getFood() {
           return "Taco";
        }
     }`,   
    options: [`Won't compile since GradStudent doesn't have a getInfo method`, `Taco`, `Pizza`, `Won't compile since you are creating a GradStudent, not a Student`, `Won't compile since you use this.getFood()`],
    answer: 1,
    unit: 9,
    explanation: `Objects know what class they are created as and all methods are resolved starting with that class at run time. If the method isn't found in that class the parent class is checked (and so on until it is found). So it will first look for getInfo in GradStudent and when it doesn't find it it will look in Student. In getInfo it calls this.getFood. Again, it will first look for this method in GradStudent. It will find the getFood method there and return "Taco".`
},
{    
    question: `If you have the following classes. Which of the following constructors would be valid for Point3D?`,
    code: `public class Point2D {
        public int x;
        public int y;
        public Point2D() {}
        public Point2D(int x,int y) {
           this.x = x;
           this.y = y;
        }
       // other methods
     }
     public class Point3D extends Point2D
     {
        public int z;
        // other code
     }
     I.  public Point3D() {}
     II. public Point3D(int x, int y, int z) 
         {
            super(x,y);
            this.z = z;
         }
     III. public Point3D(int x, int y)
          {
             this.x = x;
             this.y = y;
             this.z = 0;
          }`,   
    options: [`II only`, `III only`, `I, II, and III`, `I and II only`, `I only`],
    answer: 2,
    unit: 9,
    explanation: `I is true because Point2D does have a no-arg constructor. II is true because Point2D does have a constructor that takes x and y. III is true because Point2D does have a no-arg constructor which will be called before the first line of code is executed in this constructor. The fields x and y are public in Point2D and thus can be directly accessed by all classes.`
},
{    
    question: `Given the following method declaration, which of the following is printed as the result of the call mystery(1234)?`,
    code: `//precondition:  x >=0
    public static void mystery (int x)
    {
       System.out.print(x % 10);
    
       if ((x / 10) != 0)
       {
          mystery(x / 10);
       }
       System.out.print(x % 10);
    }`,   
    options: [`1441`, `43211234`, `3443`, `12344321`, `Many digits are printed due to infinite recursion.`],
    answer: 1,
    unit: 10,
    explanation: `This has a recursive call which means that the method calls itself when (x / 10) is greater than or equal to zero. Each time the method is called it prints the remainder of the passed value divided by 10 and then calls the method again with the result of the integer division of the passed number by 10 (which throws away the decimal part). After the recursion stops by (x / 10) == 0 the method will print the remainder of the passed value divided by 10 again.`
},
{    
    question: `Given the following method declaration, what will redo(82, 3) return?`,
    code: `public static int redo(int i, int j)
    {
       if (i==0)
          return 0;
       else
          return redo(i/j, j)+1;
    }`,   
    options: [`5`, `4`, `6`, `7`, `The method never returns due to infinite recursion.`],
    answer: 0,
    unit: 10,
    explanation: `The first time the method is called, i is not equal to 0, so the method makes a recursive call to itself, with the value of 82/3 which equals 27 due to integer division. This is still not equal to 0, so the method calls itself with the first parameter equal to 9, then 3, then 1. Finally, the method is called with the first parameter of 1/3 which equals 0 due to integer division which throws away any decimal part. Each method call adds 1 to the result, except for the final call when i is equal to 0.`
},
];