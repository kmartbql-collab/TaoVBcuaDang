import { useState, useEffect, useRef } from "react";
import {
  FileText,
  Send,
  Sparkles,
  Copy,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Plus,
  RefreshCw,
  Info,
  ChevronRight,
  Eye,
  EyeOff,
  Settings,
  X,
  FileCheck,
  FileDown
} from "lucide-react";
import { DOCUMENT_TYPES, AUTHORS, SAMPLES, PARTY_STYLE_QUICK_RULES } from "./presets";
import { Message, PartyDocument } from "./types";

export default function App() {
  // Input fields for the Quick Builder
  const [selectedType, setSelectedType] = useState<string>("nghi-quyet");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("bch-trung-uong");
  const [excerptInput, setExcerptInput] = useState<string>("");

  // Main prompt text area
  const [inputValue, setInputValue] = useState<string>(
    "[Nghị quyết] + [Ban Chấp hành Trung ương] + trích văn bản về việc tăng cường sức chiến đấu và chất lượng sinh hoạt chi bộ."
  );

  // Chat message state
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      content: "Xin kính chào đồng chí. Tôi là Trợ lý Soạn thảo Văn bản Đảng. Vui lòng nhập yêu cầu theo cấu trúc chuẩn: **[thể loại văn bản] + [tác giả] + trích văn bản ...** hoặc sử dụng **Trình kiến tạo nhanh** ở dưới để sinh văn bản đúng quy chuẩn nghiệp vụ văn phòng cấp ủy.",
      timestamp: new Date()
    }
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeDocument, setActiveDocument] = useState<PartyDocument | null>({
    isValid: true,
    title: "NGHỊ QUYẾT: VỀ TĂNG CƯỜNG SỨC CHIẾN ĐẤU VÀ NÂNG CAO CHẤT LƯỢNG SINH HOẠT CHI BỘ TRONG TÌNH HÌNH MỚI",
    header: {
      organization: "BAN CHẤP HÀNH TRUNG ƯƠNG",
      subHeader: "Số 21-NQ/TW",
      locationDate: "Hà Nội, ngày 04 tháng 06 năm 2026"
    },
    bodyMarkdown: `### I. CẤU TRÚC MỞ ĐẦU VÀ CĂN CỨ PHÁP LÝ

- Căn cứ Điều lệ Đảng Cộng sản Việt Nam;
- Căn cứ Quy chế làm việc của Ban Chấp hành Trung ương Đảng khóa XIII;
- Căn cứ Quy định số 24-QĐ/TW ngày 30 tháng 7 năm 2021 của Ban Chấp hành Trung ương về thi hành Điều lệ Đảng;

Ban Chấp hành Trung ương kiên quyết chỉ đạo và ban hành Nghị quyết như sau:

---

### II. ĐÁNH GIÁ ƯU ĐIỂM VÀ KẾT QUẢ ĐẠT ĐƯỢC

Trong thời gian qua, các cấp ủy, tổ chức đảng và người đứng đầu đã **chủ động, kịp thời** xây dựng kế hoạch, tổ chức triển khai thực hiện nghiêm túc nguyên tắc tổ chức, sinh hoạt đảng, duy trì tốt nền nếp tự phê bình và phê bình. 

Năng lực lãnh đạo, sức chiến đấu của tổ chức đảng ngày càng được củng cố. Việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh đi vào thực chất, bảo đảm công khai, minh bạch, thống nhất, có minh chứng cụ thể gắn với kết quả hành động của từng đảng viên chính thức lẫn đảng viên dự bị. Đa số cán bộ, cấp ủy viên đã thể hiện tốt phẩm chất chính trị, đạo đức, lối sống, gương mẫu thực hiện nhiệm vụ được giao.

---

### III. HẠN CHẾ, YẾU KÉM VÀ NGUYÊN NHÂN

Tuy nhiên, bên cạnh những thành tích đã đạt được, việc nghiên cứu học tập, triển khai quán triệt nghị quyết ở một số chi bộ địa phương còn mang tính **bề nổi, lúng túng**, mang nặng dĩ hòa vi quý và ngại va chạm. 

Ở một số buổi sinh hoạt chi ủy, việc góp ý cho cá nhân chủ yếu là thống nhất theo bản tự kiểm điểm, còn **nể nang, cảm tính, chưa thẳng thắn**.

**Nguyên nhân của hạn chế trên:** Nhận thức của một số cấp ủy, tổ chức đảng, người đứng đầu về tầm quan trọng của nguyên tắc tập trung dân chủ chưa đầy đủ; công tác kiểm tra, đôn đốc của chi ủy cấp trên chưa thường xuyên và thiếu chặt chẽ.

---

### IV. NHIỆM VỤ VÀ CÁC GIẢI PHÁP TRỌNG TÂM

Để tiếp tục nâng cao sức chiến đấu và chất lượng sinh hoạt Đảng bộ, Ban Chấp hành Trung ương yêu cầu các cơ quan, đơn vị thực hiện nghiêm túc các giải pháp cấp bách sau:

1. **Tiếp tục tăng cường quán triệt sâu sắc các chủ trương, đường lối, chính sách của Đảng, pháp luật của Nhà nước.** Yêu cầu 100% cán bộ chủ chốt tham gia học tập nghị quyết nghiêm túc, thực chất, hoàn thành kiểm tra đạt trên 95%.

2. **Khẩn trương khắc phục triệt để tình trạng nể nang, né tránh, dĩ hòa vi quý** trong sinh hoạt đảng. Kiểm soát chặt chẽ quyền lực cán bộ đứng đầu, quy trách nhiệm rõ cho từng cấp ủy cấp chi bộ nếu để xảy ra sai phạm hoặc không duy trì tốt nền nếp sinh hoạt định kỳ.

3. **Giao Tổ chức Trung ương chủ trì, phối hợp với các Ban xây dựng Đảng thường xuyên theo dõi, kiểm tra, kiểm soát và đôn đốc** việc thực hiện đúng tiến độ quy hoạch, bổ nhiệm, miễn nhiệm đảm bảo thực chất, bài bản trước thời hạn 15 ngày làm việc theo đúng quy định hiện hành.`,
    signature: {
      title: "T/M BAN CHẤP HÀNH TRUNG ƯƠNG\nTỔNG BÍ THƯ",
      name: "Nguyễn Phú Trọng"
    }
  });

  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const [showConfigHelp, setShowConfigHelp] = useState<boolean>(false);
  const [historyTab, setHistoryTab] = useState<"chat" | "rules">("chat");

  const [customApiKey, setCustomApiKey] = useState<string>(() => localStorage.getItem("party_app_custom_api_key") || "");
  const [userEmail, setUserEmail] = useState<string>(() => localStorage.getItem("party_app_user_email") || "");
  const [tempApiKey, setTempApiKey] = useState<string>("");
  const [tempUserEmail, setTempUserEmail] = useState<string>("");
  const [showApiKey, setShowApiKey] = useState<boolean>(false);

  useEffect(() => {
    if (showConfigHelp) {
      setTempApiKey(customApiKey);
      setTempUserEmail(userEmail);
    }
  }, [showConfigHelp, customApiKey, userEmail]);

  const handleSaveConfig = () => {
    localStorage.setItem("party_app_custom_api_key", tempApiKey.trim());
    localStorage.setItem("party_app_user_email", tempUserEmail.trim());
    setCustomApiKey(tempApiKey.trim());
    setUserEmail(tempUserEmail.trim());
    setShowConfigHelp(false);

    // Add chatbot system message directly for immediate visual feedback
    const configMsg: Message = {
      id: Math.random().toString(),
      role: "model",
      content: `⚙️ **Hệ thống đã nhận cấu hình bảo mật mới:**\n- **Gmail:** \`${tempUserEmail.trim() || "(Chưa điền)"}\`\n- **API Key:** \`${tempApiKey.trim() ? "••••••••" + tempApiKey.trim().slice(-4) : "(Chưa điền)"}\`\n\nToàn bộ lượt tác nghiệp soạn thảo văn bản Đảng bằng AI của đồng chí từ bây giờ sẽ sử dụng tài khoản cá nhân đã thiết lập.`,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, configMsg]);
  };

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat history to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Handle Quick Builder choices - update main text input structure
  useEffect(() => {
    const matchedType = DOCUMENT_TYPES.find((t) => t.id === selectedType);
    const matchedAuthor = AUTHORS.find((a) => a.id === selectedAuthor);
    if (matchedType && matchedAuthor) {
      const displayType = matchedType.name;
      const displayAuthor = matchedAuthor.name;
      const activeExcerpt = excerptInput.trim() || matchedType.placeholderText.replace("ví dụ: ", "");
      setInputValue(`[${displayType}] + [${displayAuthor}] + ${activeExcerpt}`);
    }
  }, [selectedType, selectedAuthor, excerptInput]);

  // Load sample template directly
  const handleLoadSample = (sample: typeof SAMPLES[0]) => {
    setInputValue(`[${sample.documentType}] + [${sample.author}] + ${sample.excerpt}`);
    // Update builder state to make UI consistent
    const matchedType = DOCUMENT_TYPES.find(t => t.name.toLowerCase() === sample.documentType.toLowerCase());
    const matchedAuthor = AUTHORS.find(a => a.name.toLowerCase() === sample.author.toLowerCase());
    if (matchedType) setSelectedType(matchedType.id);
    if (matchedAuthor) setSelectedAuthor(matchedAuthor.id);
    setExcerptInput(sample.excerpt);
  };

  // Submit to Node Backend /api/chat
  const handleSubmitPrompt = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Auto-switch to chat tab so user can see immediate feedback and loading state
    setHistoryTab("chat");

    // Add user message to UI
    const newUserMessage: Message = {
      id: Math.random().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);
    setInputValue(""); // Clear input area
    setExcerptInput(""); // Clear excerpt

    try {
      // Build history for backend
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload,
          customApiKey: customApiKey,
          userEmail: userEmail
        })
      });

      if (!res.ok) {
        throw new Error(`Mất kết nối máy chủ (${res.status})`);
      }

      const data = await res.json();

      if (data.isValid) {
        // Document generation successful
        const newBotMessage: Message = {
          id: Math.random().toString(),
          role: "model",
          content: `Đã khởi tạo thành công văn bản Đảng chuẩn pháp lý. Đồng chí có thể xem bản xem trước (A4) kết quả ở khung hiển thị bên phải.`,
          isDocumentResult: true,
          documentData: data,
          timestamp: new Date()
        };

        setMessages((prev) => [...prev, newBotMessage]);
        setActiveDocument(data);
      } else {
        // Error / format warning returned from AI
        const newBotMessage: Message = {
          id: Math.random().toString(),
          role: "model",
          content: data.errorMsg || "Yêu cầu chưa đạt chuẩn cấu trúc chính trị. Đồng chí vui lòng điền đủ yếu tố Thể loại, Tác giả và Nội dung tóm lược.",
          errorMsg: data.errorMsg,
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, newBotMessage]);
      }
    } catch (err: any) {
      console.error(err);
      const errorMsg = err.message || "Không thể kết nối máy chủ soạn thảo.";
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          role: "model",
          content: `⚠️ Gặp lỗi kỹ thuật: ${errorMsg}. Vui lòng thử lại hoặc kiểm tra xem API Key đã cấu hình chính xác chưa.`,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (!activeDocument) return;
    const documentText = `
${activeDocument.header.organization}
${activeDocument.header.subHeader}
ĐẢNG CỘNG SẢN VIỆT NAM
${activeDocument.header.locationDate}

${activeDocument.title}

${activeDocument.bodyMarkdown}

${activeDocument.signature.title}
${activeDocument.signature.name}
    `.trim();

    navigator.clipboard.writeText(documentText);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  // Turn simple line notations into bold, highlighted blocks
  const parseDocumentBody = (text: string) => {
    return text.split("\n").map((line, idx) => {
      // Headers
      if (line.startsWith("###")) {
        return (
          <h4 key={idx} className="font-bold font-serif text-slate-900 border-b border-dashed border-red-200 pb-2 mt-6 mb-3 text-base uppercase select-text">
            {line.replace("###", "").trim()}
          </h4>
        );
      }
      if (line.startsWith("##") || line.startsWith("#")) {
        return (
          <h4 key={idx} className="font-bold font-serif text-slate-900 border-b border-red-300 pb-2 mt-6 mb-3 text-base uppercase select-text">
            {line.replace(/^##|#/, "").trim()}
          </h4>
        );
      }

      // Check bullet items
      const isBullet = line.trim().startsWith("-");
      const isListNumber = /^\d+\./.test(line.trim());
      
      let processedLine = line;
      if (isBullet) {
        processedLine = line.trim().substring(1).trim();
      }

      // Replace bold syntax **text** within line
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(processedLine)) !== null) {
        // Text before bold
        if (match.index > lastIndex) {
          parts.push(processedLine.substring(lastIndex, match.index));
        }
        // Bold text itself (highlight standard Party phraseology)
        parts.push(
          <strong key={match.index} className="bg-red-50 text-red-900 font-semibold px-1 rounded border border-red-100 select-text">
            {match[1]}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < processedLine.length) {
        parts.push(processedLine.substring(lastIndex));
      }

      const contentToRender = parts.length > 0 ? parts : processedLine;

      if (isBullet) {
        return (
          <div key={idx} className="flex items-start gap-2 pl-4 py-1 select-text text-justify">
            <span className="text-red-700 mt-1.5 shrink-0 select-none">•</span>
            <span className="text-sm font-serif leading-relaxed text-slate-800">
              {contentToRender}
            </span>
          </div>
        );
      }

      if (isListNumber) {
        return (
          <div key={idx} className="pl-4 py-2 select-text text-justify text-sm font-serif leading-relaxed text-slate-800">
            {contentToRender}
          </div>
        );
      }

      if (line.trim() === "---") {
        return <div key={idx} className="my-4 border-t border-red-100 select-none" />;
      }

      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="text-sm font-serif leading-relaxed text-slate-800 text-justify mb-2 select-text indent-8">
          {contentToRender}
        </p>
      );
    });
  };

  // Estimate compliance score for UI feedback based on core party terms
  const analyzeCompliance = (text: string) => {
    if (!text) return { score: 0, matches: [] };
    const keywords = [
      "cấp ủy", "chi bộ", "ban chấp hành", "chấp hành", "đảng viên", "thi hành", 
      "quy hoạch", "bổ nhiệm", "miễn nhiệm", "luật của nhà nước", "tự phê bình", "phê bình", 
      "suy thoái về tư tưởng chính trị", "tự diễn biến", "tự chuyển hóa", "quyết liệt", "nề nếp", 
      "hoàn thành xuất sắc nhiệm vụ", "đến nay", "tuy nhiên", "bên cạnh đó", "người đứng đầu", 
      "kiên quyết", "chủ động", "kịp thời", "thường xuyên", "triệt để", "chặt chẽ"
    ];
    const found = keywords.filter(kw => text.toLowerCase().includes(kw));
    const percentage = Math.min(100, Math.round((found.length / 8) * 100));
    return { score: percentage, matches: found };
  };

  const documentStats = activeDocument ? analyzeCompliance(activeDocument.bodyMarkdown) : { score: 0, matches: [] };

  return (
    <div className="flex flex-col h-screen w-full bg-[#f1f5f9] text-slate-900 font-sans overflow-hidden" id="main_party_app">
      
      {/* 1. INSTITUTIONAL HEADER: Crimson with Gold & Star accents */}
      <header className="h-16 bg-[#991B1B] text-white flex items-center justify-between px-6 border-b-4 border-[#FFD700] shadow-lg shrink-0 relative z-30 select-none" id="party_app_header">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#FFD700] text-[#991B1B] rounded-none flex items-center justify-center font-bold text-xl shadow-md border-2 border-white transform rotate-45">
            <span className="transform -rotate-45">★</span>
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight uppercase font-serif flex items-center gap-2">
              Soạn thảo văn bản văn phòng Đảng <span className="text-[11px] font-sans font-normal border border-white/30 px-1.5 py-0.2 rounded bg-red-900">Trợ Lý Số</span>
            </h1>
            <p className="text-[10px] opacity-80 uppercase tracking-widest font-sans">
              Hệ thống xử lý văn kiện & Quy chuẩn Đảng quy hiện hành
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowConfigHelp(!showConfigHelp)}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded transition border select-none cursor-pointer ${
              customApiKey && userEmail
                ? "bg-[#FFD700] text-[#991B1B] border-[#FFD700] hover:bg-[#FFE552]"
                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
            }`}
            title="Nhập Gmail và Gemini API Key cá nhân để đồng bộ soạn thảo AI"
          >
            <Settings className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {customApiKey && userEmail ? "Cấu hình API (Đã lưu)" : "Cấu hình API"}
            </span>
          </button>
          <div className="hidden md:flex items-center space-x-3 text-xs font-medium uppercase tracking-wider border-l border-white/20 pl-4">
            <span className="opacity-90">Phân hệ: Triển khai Độc lập</span>
            <span className="bg-[#FFD700] text-red-950 px-2 py-0.5 font-bold rounded text-[10px]">
              VĂN PHÒNG ĐẢNG
            </span>
          </div>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden p-3 md:p-4 gap-4" id="main_workspace">
        
        {/* Left Column: Intelligent Input & Rules (40%) */}
        <section className="w-full lg:w-[42%] flex flex-col gap-4 overflow-hidden h-full" id="left_workspace_panel">
          
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col flex-grow overflow-hidden relative">
            
            {/* Tab selection */}
            <div className="flex border-b border-slate-200 justify-between items-center bg-slate-50 px-4 py-2 shrink-0 select-none">
              <div className="flex space-x-2">
                <button
                  onClick={() => setHistoryTab("chat")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition ${
                    historyTab === "chat"
                      ? "bg-[#991B1B] text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Trợ lý Số
                </button>
                <button
                  onClick={() => setHistoryTab("rules")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition ${
                    historyTab === "rules"
                      ? "bg-[#991B1B] text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Quy tắc văn phong ({PARTY_STYLE_QUICK_RULES.length})
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-sans font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Trực tuyến
                </span>
              </div>
            </div>

            {/* Chat screen / Rule screen dynamic view */}
            {historyTab === "chat" ? (
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fafbfc]" id="chat_scroll_area">
                {messages.map((m) => {
                  const isUser = m.role === "user";
                  return (
                    <div
                      key={m.id}
                      className={`flex ${isUser ? "justify-end" : "justify-start"} items-start gap-2.5 animate-fadeIn`}
                    >
                      {/* Avatar */}
                      {!isUser && (
                        <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-bold font-serif text-sm border-2 border-white shadow shadow-red-200 shrink-0 select-none mt-1">
                          Đ
                        </div>
                      )}

                      <div className="max-w-[85%] flex flex-col">
                        <div
                          className={`p-3.5 rounded-2xl shadow-sm text-sm ${
                            isUser
                              ? "bg-[#991B1B] text-white rounded-tr-none font-medium ml-auto"
                              : m.errorMsg
                              ? "bg-amber-50 text-amber-900 border border-amber-200 rounded-tl-none font-sans"
                              : "bg-white text-slate-800 border border-slate-200/80 rounded-tl-none font-sans"
                          }`}
                        >
                          {/* Render custom warnings when not compliant */}
                          {m.errorMsg ? (
                            <div className="space-y-3">
                              <div className="flex items-start gap-2 text-amber-800 font-semibold text-xs uppercase tracking-wide border-b border-amber-200 pb-1.5">
                                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                                Thông báo quy chế định dạng văn phong
                              </div>
                              <p className="text-slate-800 leading-relaxed text-sm select-text whitespace-pre-wrap">
                                {m.errorMsg}
                              </p>
                              <div className="bg-white/60 p-3 rounded-lg border border-amber-100 text-[12px] text-slate-700 space-y-2">
                                <span className="font-bold text-slate-900">Đồng chí lưu ý cú pháp chuẩn:</span>
                                <div className="font-mono bg-slate-900 text-amber-400 p-2 rounded p-1 text-center font-semibold text-xs select-all">
                                  [Thể loại] + [Tác giả] + Trích yếu nội dung
                                </div>
                                <span className="block italic mt-1 text-slate-500">
                                  Ví dụ: Quyết định + Ủy ban Kiểm tra và Giám sát Huyện ủy + Thi hành kỷ luật...
                                </span>
                              </div>
                            </div>
                          ) : (
                            <p className="whitespace-pre-line leading-relaxed select-text font-sans">
                              {m.content}
                            </p>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 px-1 select-none">
                          {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {isLoading && (
                  <div className="flex justify-start items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-300 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0 animate-pulse select-none">
                      AI
                    </div>
                    <div className="bg-slate-100 text-slate-500 text-xs px-4 py-2.5 rounded-full border border-slate-200 flex items-center gap-2 font-medium">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#991B1B]" />
                      Đồng chí vui lòng đợi trong giây lát, trợ lý đang dự thảo...
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            ) : (
              // Instruction list
              <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-3" id="quick_rules_panel">
                <div className="bg-red-50 p-4 rounded-xl border border-red-200/60 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <FileCheck className="w-5 h-5 text-red-700" />
                    <h4 className="font-bold text-red-900 text-xs uppercase tracking-wider font-serif">
                      Bộ Quy Tắc Văn Phong Chuẩn Đảng Cộng sản Việt Nam
                    </h4>
                  </div>
                  <p className="text-xs text-red-800 leading-relaxed">
                    Được tích hợp trực tiếp dựa trên Hiến pháp, Điều lệ Đảng, Quy chế làm việc hành chính Đảng và chỉ đạo của Ban Chấp hành Trung ương.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {PARTY_STYLE_QUICK_RULES.map((rule, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200 hover:border-red-200 transition shadow-sm">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 text-[11px] font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-bold text-slate-800 text-xs uppercase tracking-tight">
                          {rule.rule}
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-600 font-sans pl-7 leading-relaxed">
                        {rule.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* QUICK PRESET SAMPLES BAR */}
            <div className="bg-white border-t border-slate-200 px-4 py-3 shrink-0" id="quick_select_presets">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1 leading-none select-none">
                  <BookOpen className="w-3 h-3 text-red-700" />
                  Mẫu văn bản tiêu chuẩn & Định hướng chính trị nhanh
                </span>
                <span className="text-[10px] text-slate-400 hidden sm:inline select-none">
                  Click để nạp nhanh cấu trúc yêu cầu
                </span>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin select-none">
                {SAMPLES.map((sample, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => handleLoadSample(sample)}
                    className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-left shrink-0 w-64 text-xs transition duration-150 cursor-pointer flex flex-col justify-between"
                  >
                    <span className="font-bold text-slate-800 mb-1 line-clamp-1 block">
                      {sample.label}
                    </span>
                    <span className="text-[10px] text-slate-500 line-clamp-1">
                      {sample.excerpt}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* TRÌNH KIẾN TẠO NHANH (QUICK FORM BUILDER BOX) */}
            <div className="bg-slate-50 border-t border-slate-200 p-4 shrink-0" id="interactive_form_builder">
              <div className="flex items-center justify-between mb-3 border-b border-dashed border-slate-200 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-[#991B1B]" />
                  Trình kiến tạo nhanh văn bản Đảng
                </span>
                <span className="text-[10px] bg-red-100 text-red-800 font-semibold px-2 py-0.5 rounded uppercase">
                  Tạo cấu trúc tự động
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                {/* 1. Document Type Select */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1 select-none">
                    Thể loại văn bản
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full text-xs font-medium p-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 cursor-pointer"
                  >
                    {DOCUMENT_TYPES.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name} ({type.abbreviation})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Target Author Select */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1 select-none">
                    Cơ quan ban hành
                  </label>
                  <select
                    value={selectedAuthor}
                    onChange={(e) => setSelectedAuthor(e.target.value)}
                    className="w-full text-xs font-medium p-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 cursor-pointer"
                  >
                    {AUTHORS.map((author) => (
                      <option key={author.id} value={author.id}>
                        {author.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Excerpt Summary input */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase select-none">
                    Nội dung trích văn bản (Chỉ cần viết ý chính)
                  </label>
                  <span className="text-[9px] text-slate-400 italic">
                    Hệ thống sẽ chuẩn hóa ngôn ngữ Đảng
                  </span>
                </div>
                <input
                  type="text"
                  value={excerptInput}
                  onChange={(e) => setExcerptInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (!isLoading && inputValue.trim()) {
                        handleSubmitPrompt(inputValue);
                      }
                    }
                  }}
                  placeholder={
                    DOCUMENT_TYPES.find((t) => t.id === selectedType)?.placeholderText ||
                    "ví dụ: Nghiệp vụ chi bộ, công nhận đảng viên..."
                  }
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Textarea for direct input review & action */}
              <div className="border-t border-slate-200 pt-3 relative" id="final_drafting_prompt">
                {(!customApiKey || !userEmail) && (
                  <div className="bg-amber-50 text-amber-900 border border-amber-200 rounded-lg p-2.5 mb-2.5 flex items-start gap-2 text-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 animate-pulse" />
                    <div className="flex-1">
                      <span className="font-bold">Đồng chí lưu ý:</span> Hiện đang thiếu cấu hình Gmail hoặc API Key cá nhân.
                      <button
                        onClick={() => setShowConfigHelp(true)}
                        className="ml-1 text-[#991B1B] font-bold underline hover:text-red-700 cursor-pointer text-left inline-block"
                      >
                        Thiết lập ngay ở đây &rarr;
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center mb-1 bg-white p-2 rounded border border-slate-200 shadow-inner">
                  <div className="text-[11px] text-slate-500 truncate max-w-[80%] pr-2">
                    <span className="font-bold text-[#991B1B]">Cú pháp đầu vào:</span>{" "}
                    <code className="font-mono text-slate-800 select-all">{inputValue}</code>
                  </div>
                  <button
                    onClick={() => {
                      setExcerptInput("");
                      setInputValue("[Nghị quyết] + [Ban Chấp hành Trung ương] + ");
                    }}
                    className="text-[10px] text-red-600 hover:underline flex items-center gap-0.5"
                    title="Xóa trắng để nhập tự do"
                  >
                    <X className="w-3 h-3" /> Xóa
                  </button>
                </div>

                <div className="relative mt-2">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        if (!isLoading && inputValue.trim()) {
                          handleSubmitPrompt(inputValue);
                        }
                      }
                    }}
                    className="w-full h-20 p-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-600 resize-none pr-12 text-slate-800"
                    placeholder="Nhập yêu cầu dạng: [thể loại văn bản] + [tác giả] + trích văn bản..."
                  />
                  <button
                    onClick={() => handleSubmitPrompt(inputValue)}
                    disabled={isLoading || !inputValue.trim()}
                    className="absolute bottom-2.5 right-2 bg-[#991B1B] text-white p-2 rounded-md hover:bg-red-800 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center shadow"
                    title="Bấm để dự thảo văn bản Đảng tức thì"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Right Column: High-fidelity Document Preview (60%) */}
        <section className="w-full lg:w-[58%] bg-slate-300 rounded-xl shadow-inner p-2 md:p-6 flex flex-col justify-between overflow-hidden h-full" id="document_preview_panel">
          
          {/* Document tools toolbar */}
          <div className="flex items-center justify-between mb-3 bg-white/80 p-2.5 rounded-lg border border-slate-200/60 select-none">
            <div className="flex items-center gap-2">
              <div className="p-1 px-2.5 bg-red-100 text-red-800 font-bold uppercase text-[10px] tracking-wide rounded-md border border-red-200 flex items-center gap-1">
                <FileText className="w-3 h-3" />
                VĂN BẢN TRÌNH DUYỆT
              </div>
              <span className="hidden sm:inline text-xs text-slate-500 font-medium">|</span>
              <span className="hidden sm:inline text-xs text-slate-700 font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                Khổ giấy: A4 (Tiêu chuẩn hành chính)
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {/* Compliance indicator */}
              <div className="hidden md:flex items-center gap-1.5 border border-dashed border-red-100 bg-red-50/50 px-2.5 py-1 rounded">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-red-950 uppercase">
                  Độ khớp Đảng quy: {documentStats.score}%
                </span>
              </div>

              {/* Copy plain-text button */}
              <button
                onClick={handleCopyToClipboard}
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded-md font-bold transition flex items-center gap-1 shadow-sm active:scale-95 cursor-pointer"
                title="Sao chép toàn bộ văn bản vào khay tạm"
                disabled={!activeDocument}
              >
                {copySuccess ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                    Đã sao chép!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Sao chép bản thảo
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Paper document area styled as Standard A4 Letterhead */}
          <div className="flex-1 overflow-y-auto bg-slate-400 p-2 md:p-6 rounded-lg flex justify-center border border-slate-300 shadow-inner">
            
            {activeDocument ? (
              <div className="bg-white w-full max-w-[640px] min-h-[880px] p-8 md:p-14 text-slate-900 flex flex-col font-serif leading-relaxed shadow-2xl relative select-text mx-auto bg-[radial-gradient(#f8fafc_1px,transparent_1px)] bg-[size:16px_16px]">
                
                {/* Watermark symbol background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                  <span className="text-[180px] font-serif font-bold text-red-900 block">☭</span>
                </div>

                {/* 1. Official Document Letterhead Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-10 border-b border-red-900/10 pb-6 relative z-10 select-text">
                  <div className="text-center w-full sm:w-56 shrink-0">
                    <p className="font-bold text-[11px] md:text-xs uppercase tracking-tight font-sans text-slate-800">
                      ĐẢNG CỘNG SẢN VIỆT NAM
                    </p>
                    <p className="text-[12px] md:text-sm font-bold border-b border-black pb-1.5 mb-1.5 font-sans text-red-900">
                      {activeDocument.header.organization}
                    </p>
                    <p className="text-[10px] md:text-xs font-semibold text-slate-600 font-mono">
                      {activeDocument.header.subHeader}
                    </p>
                  </div>
                  
                  <div className="text-center sm:text-right w-full sm:w-auto italic text-xs md:text-sm text-slate-700 pt-1 flex flex-col">
                    <span className="font-sans font-medium text-slate-800 not-italic uppercase tracking-wider text-[10px] text-[#991B1B] mb-1 block">
                      ★ CHUẨN ĐẢNG QUY ★
                    </span>
                    <span>{activeDocument.header.locationDate}</span>
                  </div>
                </div>

                {/* 2. Official Actionable Document Title */}
                <div className="text-center mb-8 relative z-10 select-text">
                  <h2 className="font-bold text-lg md:text-xl uppercase text-slate-950 font-serif leading-snug tracking-tight">
                    {activeDocument.title.split(":").map((v, i) => {
                      if (i === 0) return <span key={i} className="block text-red-700 border-b-2 border-red-700/20 max-w-xs mx-auto pb-1 mb-2 font-black tracking-normal">{v}</span>;
                      return <span key={i} className="block text-sm md:text-base text-slate-800 font-bold mt-1 max-w-lg mx-auto">{v}</span>;
                    })}
                  </h2>
                </div>

                {/* 3. Fully formatted content with custom parser */}
                <div className="text-sm md:text-base space-y-4 flex-1 relative z-10 select-text">
                  {parseDocumentBody(activeDocument.bodyMarkdown)}
                </div>

                {/* 4. Signature Block (Left stamp placeholder / Right authorized name) */}
                <div className="mt-12 flex justify-between items-start gap-8 relative z-10 select-text">
                  
                  {/* Left: Place for archives receiving list */}
                  <div className="w-[45%] text-[10px] md:text-xs border border-slate-200 p-2.5 rounded bg-slate-50 italic text-slate-600 leading-normal select-none">
                    <p className="font-bold uppercase tracking-tight text-slate-700 not-italic mb-1 border-b border-slate-200 pb-0.5">
                      Nơi nhận:
                    </p>
                    <p>- Thường trực Tỉnh ủy (để b/c);</p>
                    <p>- Các Ban xây dựng Đảng;</p>
                    <p>- Văn phòng Cấp ủy;</p>
                    <p>- Đảng ủy, Chi ủy liên quan;</p>
                    <p>- Lưu Văn phòng.</p>
                  </div>

                  {/* Right: Actual authorized Signatory signature */}
                  <div className="w-[50%] text-center font-sans">
                    <p className="font-bold text-[12px] md:text-xs uppercase text-slate-900 tracking-tight whitespace-pre-line leading-relaxed font-sans">
                      {activeDocument.signature.title}
                    </p>
                    
                    {/* Placeholder for official seal */}
                    <div className="h-16 flex items-center justify-center my-2 relative select-none">
                      <div className="w-14 h-14 rounded-full border-2 border-red-500/10 border-dashed flex items-center justify-center text-red-500/20 text-[8px] font-bold select-none absolute">
                        (DẤU ĐỎ)
                      </div>
                    </div>

                    <p className="font-bold text-sm md:text-base text-slate-950 font-serif border-t border-slate-200/50 pt-2">
                      {activeDocument.signature.name}
                    </p>
                  </div>

                </div>

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 text-slate-500">
                <FileCheck className="w-16 h-16 text-slate-400 mb-4 animate-bounce" />
                <h3 className="font-bold text-slate-700 text-base">Hiện chưa có văn bản dự thảo nào</h3>
                <p className="text-xs text-slate-500 max-w-sm mt-1">
                  Đồng chí hãy điền thông tin nhanh ở bảng bên trái hoặc gửi yêu cầu cho chatbot để tạo ngay.
                </p>
              </div>
            )}

          </div>

          {/* Footer informational system banner inside preview */}
          <div className="mt-3 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-600 bg-white/50 px-3 py-2 rounded-md border border-slate-200 select-none">
            <span className="font-medium">
              Văn bản được biên soạn dựa trên Hệ thống cơ sở dữ liệu Văn kiện văn phòng Trung ương khóa XIII
            </span>
            <span className="text-[#991B1B] font-bold uppercase mt-1 sm:mt-0 tracking-wider">
              ★ TUÂN THỦ NGHIÊM NGẶT ĐẢNG QUY
            </span>
          </div>

        </section>

      </main>

      {/* 3. API CONFIGURATION MODAL / SLIDE OVER */}
      {showConfigHelp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 select-none">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-[#991B1B] animate-fadeIn">
            {/* Header */}
            <div className="bg-[#991B1B] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#FFD700]" />
                <h3 className="font-bold text-sm uppercase tracking-wide font-serif">
                  Cấu hình Thông tin Người dùng & Gemini API
                </h3>
              </div>
              <button
                onClick={() => setShowConfigHelp(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100 text-[11px] text-red-900 leading-relaxed font-medium">
                <Info className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Chính sách bảo mật dữ liệu Đảng</p>
                  <p className="mt-0.5 text-slate-700 font-normal">
                    Thông tin Gmail và API Key của đồng chí được lưu trữ cục bộ trên trình duyệt (localStorage) và chỉ chuyển tiếp bảo mật qua lớp máy chủ độc lập (Server proxy). Hãy an tâm tác nghiệp.
                  </p>
                </div>
              </div>

              {/* Input: Gmail Address */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  1. Địa chỉ Gmail cá nhân: <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  value={tempUserEmail}
                  onChange={(e) => setTempUserEmail(e.target.value)}
                  placeholder="VD: nguyenvanan@gmail.com"
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-medium text-slate-800"
                />
                <p className="text-[10px] text-slate-400 italic">
                  Dùng để danh định tác giả soạn thảo trên hệ quả văn bản AI.
                </p>
              </div>

              {/* Input: Gemini API Key */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  2. Gemini API Key cá nhân: <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showApiKey ? "text" : "password"}
                    value={tempApiKey}
                    onChange={(e) => setTempApiKey(e.target.value)}
                    placeholder="Nhập khóa AI Gemini bắt đầu bằng AIzaSy..."
                    className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-mono text-slate-800 pr-10 animate-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                    title={showApiKey ? "Ẩn khóa bí mật" : "Hiện khóa bí mật"}
                  >
                    {showApiKey ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 italic">
                  Khóa API có dạng bắt đầu bằng <code className="bg-slate-100 px-1 py-0.2 rounded text-red-600">AIzaSy</code>. Đồng chí truy cập Google AI Studio để lấy API Key miễn phí.
                </p>
              </div>

              {/* Actions */}
              <div className="border-t border-slate-200 pt-4 flex justify-between gap-3 select-none">
                <button
                  type="button"
                  onClick={() => setShowConfigHelp(false)}
                  className="bg-slate-100 text-slate-700 px-4 py-2 rounded font-bold text-xs uppercase hover:bg-slate-200 transition cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={handleSaveConfig}
                  className="bg-[#991B1B] text-white px-5 py-2 rounded font-bold text-xs uppercase hover:bg-red-800 transition shadow cursor-pointer flex items-center gap-1.5 border border-red-700"
                >
                  <FileCheck className="w-3.5 h-3.5 text-[#FFD700]" />
                  Lưu cấu hình
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. SYSTEM STATUS FOOTER */}
      <footer className="h-10 bg-slate-900 text-slate-400 px-6 flex items-center justify-between text-[10px] uppercase tracking-widest shrink-0 border-t-2 border-red-900 select-none" id="party_app_footer">
        <div className="flex space-x-6">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Hệ thống: Trực tuyến (Sẵn sàng)
          </span>
          <span className="hidden sm:inline">
            Phiên bản: Số hóa hồ sơ cấp ủy v2.6
          </span>
        </div>
        <div className="text-[9px] text-right truncate">
          © 2026 Văn phòng Điện tử Đảng bộ - Ban Tổ chức & Kiểm tra chính quyền
        </div>
      </footer>

    </div>
  );
}
