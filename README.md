# Chat Application

Bu proje, kullanıcıların gerçek zamanlı olarak mesajlaşmalarını sağlayan bir sohbet uygulamasıdır. Uygulama, React, Socket.IO ve Node.js kullanarak gerçek zamanlı veri aktarımını sağlar.

## Özellikler

- Gerçek zamanlı mesajlaşma
- Kullanıcı mesajlarını sağa hizalı olarak gösterme (kendi gönderdiği mesajlar)
- Scrollable mesaj listesi
- Kullanıcı girişine bağlı otomatik kaydırma

## Kurulum

### Gereksinimler

- Node.js
- Socket.IO Server (Arka planda çalıştırılan bir Socket.IO sunucusuna ihtiyaç duyar)

### Adımlar

1. Projeyi Klonlayın:

```bash
git clone https://github.com/yasarcandamli/ChatApp.git
cd chatapp
```

2. Bağımlılıkları Kurun:

```bash
npm install
```

3. Socket.IO Sunucusunu Başlatın:

Proje, `/socketApi.js` dosyasındaki bağlantılarla birlikte çalışacak bir Socket.IO sunucusu gerektirir. Socket.IO sunucusunu `localhost:3000`'de başlatmalısınız.

4. Projeyi Çalıştırın:

```bash
npm start
```

## Proje Yapısı

- `App.js:` Uygulamanın ana bileşeni olup, ChatProvider ile sohbet bağlamını sağlıyor ve Container bileşenini içeriyor.
- `Container.js:` Sohbet listesi (ChatList) ve form (ChatForm) bileşenlerini içeren ana konteyner.
- `ChatList.js:` Tüm mesajları gösteren liste bileşeni.
- `ChatItem.js:` Tek bir mesajı gösteren bileşen.
- `ChatForm.js:` Kullanıcının yeni mesaj göndermesini sağlayan form bileşeni.
- `ChatContext.js:` Uygulama boyunca kullanılacak sohbet bağlamı, mesajları saklamak ve güncellemek için useContext ve useState kullanıyor.
- `socketApi.js:` Socket.IO bağlantısını başlatmak ve mesaj göndermek/almak için API işlevleri.

## Önemli Kod Parçaları

- **Mesajların Gönderilmesi:**

  - `ChatForm.js` içinde, `handleSubmit` fonksiyonu ile mesaj, `sendMessage` aracılığıyla Socket.IO sunucusuna gönderilir.

```bash
const handleSubmit = (e) => {
e.preventDefault();
setMessages((prevState) => [...prevState, { message, fromMe: true }]);
sendMessage(message);
setMessage('');
}
```

- **Mesajların Alınması ve Gösterilmesi:**

  - ChatList.js içindeki ScrollableFeed, yeni mesaj geldiğinde otomatik kaydırma sağlar ve messages dizisini görüntüler.

```bash
{messages.map((item, key) => (
<ChatItem key={key} item={item} />
))}
```

## Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzü bileşenleri oluşturmak için.
- **Socket.IO:** Gerçek zamanlı veri aktarımı için.
- **CSS Modules:** Stil yönetimini izole etmek için.
- **react-scrollable-feed:** Otomatik kaydırmalı mesaj listesi sağlamak için.
