# Nampa

## desing について

- [画面設計書](https://docs.google.com/spreadsheets/d/1s0h3fUOB-lqUyRqYORIOrkJSwGIUgqRGQULpWQqYxpQ/edit#gid=0)
- [Figma 初期デザイン](https://www.figma.com/file/n005lmleyhBRcDIAifH3tL/nanpa?node-id=0%3A1)
- [サイトマップ](https://docs.google.com/spreadsheets/d/1s0h3fUOB-lqUyRqYORIOrkJSwGIUgqRGQULpWQqYxpQ/edit#gid=0)

---

### 作成するデザイン一覧

| name                 | URL                    | 認証 |
| -------------------- | ---------------------- | ---- |
| トップ　未ログイン   | /                      | none |
| トップ　済ログイン   | /                      | true |
| マイページ           | /user/my-page          | true |
| マイページ編集       | /user/my-page/edit     | true |
| 他人のマイページ閲覧 | /user/:user_id         | true |
| イベント検索         | /events                | true |
| イベント閲覧         | /events/:event_id      | true |
| イベント作成         | /events/create         | true |
| イベント編集         | /events/:event_id/edit | true |

### tailwind scroll bar hide

[参考サイト](https://www.npmjs.com/package/tailwind-scrollbar-hide)
