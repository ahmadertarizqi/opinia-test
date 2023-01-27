import { ChatWidgetWrapper } from "../chat-widget/chat-widget-wrapper"
import { ChatWidgetBubble } from "../chat-widget/chat-widget-bubble"
import { ChatWidgetSeparator } from "../chat-widget/chat-widget-separator"

export function ChatDetailBody(props: any) {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="relative h-full bg-neutral-100">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <img src="/img/chat-background.png" className="w-full h-full object-cover" alt="chat-background" />
        </div>
        <ChatWidgetWrapper>
          <ChatWidgetBubble message="Halo Adam" time="10:19" />
          <ChatWidgetBubble message="Halo Oktavia" time="10:19" alignContent="end" />
          <ChatWidgetBubble message="Apa ada yang bisa saya bantu?" time="10:19" alignContent="end" />
          <ChatWidgetBubble message="Ada beberapa hal yang ingin saya bicarakan dengan mu" time="10:19" />
          <ChatWidgetSeparator description="22 September 2022" />
          <ChatWidgetBubble message="Mohon maaf okt, siang ini saya harus menemui client. bagaimana jika nanti malam?" time="10:19" />
          <ChatWidgetBubble message="Baiklah jika begitu, saya akan menunggu di Cafe dekat rumah mu pukul 19.00" time="10:19" alignContent="end" />
          <ChatWidgetBubble message="Baiklah, sampai nanti oktavia" time="10:19" alignContent="end" />
          <ChatWidgetBubble message="Sampai nanti adam" time="10:19" />
        </ChatWidgetWrapper>
      </div>
    </div>
  )
}