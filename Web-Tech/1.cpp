#include <iostream>
#include <vector>
using namespace std;

int main() {

    int n, m;

    cout << "Enter size of A: ";
    cin >> n;

    vector<int> A(n);

    cout << "Enter elements of A: ";
    for (int i = 0; i < n; i++) {
        cin >> A[i];
    }

    cout << "Enter size of B: ";
    cin >> m;

    vector<int> B(m);

    cout << "Enter elements of B: ";
    for (int i = 0; i < m; i++) {
        cin >> B[i];
    }

    vector<int> ans;

    int i = 0, j = 0;

    // Merge the two sorted arrays
    while (i < n && j < m) {
        if (A[i] <= B[j]) {
            ans.push_back(A[i]);
            i++;
        } else {
            ans.push_back(B[j]);
            j++;
        }
    }

    while (i < n) {
        ans.push_back(A[i]);
        i++;
    }

    while (j < m) {
        ans.push_back(B[j]);
        j++;
    }

    // Print merged array
    cout << "\nMerged Array: ";
    for (int x : ans) {
        cout << x << " ";
    }

    int size = ans.size();

    if (size % 2 == 0) {
        int sum = ans[size / 2 - 1] + ans[size / 2];
        cout << "\nSum of middle elements = " << sum;
    } else {
        cout << "\nOnly one middle element = " << ans[size / 2];
    }

    return 0;
}