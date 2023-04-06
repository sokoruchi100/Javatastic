export const exerciseBank = [
{},
{},
{},
{
    preCode: `public class MathMadness {
    public int oddDoubler(int a, int b) {
        //Type Here
    }
}`,
    answerCode: `public class MathMadness {
        public int oddDoubler(int a, int b) {
            int sum = a + b;
            int multiplier = sum % 2;
            return sum + (multiplier * sum);
        }
    }`
},
{
    preCode: `public class StringShenanigans {
        public String capitalizer(String word) {
            //Type Here
        }
    }`,
    answerCode: `public class StringShenanigans {
        public String capitalizer(String word) {
            return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
        }
    }`
}
]