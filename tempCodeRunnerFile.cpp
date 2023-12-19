#include <bits/stdc++.h>
using namespace std;

template <typename T>
class calculate{
    T a;
    T b;
    calculate(T x, T y)
    {
        T add()
        {
            return a+b;
        }
        T sub()
        {
            return a-b;
        }
        T mul()
        {
            return a*b;
        }
        T div()
        {
            return a/b;
        }
    }
};
int main()
{
  int a,b;
  float c,d;
  cin>>a>>b;
  cin>>c>>d;
  calculate<int> intCalc(a, b);
  calculate<float> floatCalc(c, d);
  cout<<intCalc.add()<<endl;
  cout<<intCalc.sub()<<endl;
  cout<<intCalc.mul()<<endl;
  cout<<intCalc.div()<<endl;
  cout<<floatCalc.add()<<endl;
  cout<<floatCalc.sub()<<endl;
  cout<<floatCalc.mul()<<endl;
  cout<<floatCalc.div()<<endl;
  return 0;
}