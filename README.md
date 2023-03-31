1.khởi tạo git trong thư mục:git init
2.kiểm tra thông tin:git status
3.tạo track(thêm các file vào sẵn sàng comit):git add .
4.kiểm tra thông tin:git status
5.commit git: git commit -m"<noi dung comit>" // git commit -m "update file"
<!-- hoàn thành commit lên -->
6.liên kết với repo: git remote add origin <link repo>
7.tạo branch: git checkout -b <ten_branch> // git checkout -b season-1
8.đẩy source lên repo: git push --set-upstream origin <ten_branch> // git push --set-upstream origin season-1
<!-- xóa link repo hiện hiện tại -->
 git remote rm origin