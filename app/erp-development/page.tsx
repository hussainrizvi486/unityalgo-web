import { Header } from "@/components/header";
import { CheckCircle, TrendingUp, BarChart3, DollarSign, FileText, Shield } from 'lucide-react';


const Index = () => {

    return (
        <div>
            <Header />


            <div className='max-w-6xl mx-auto px-4 py-16'>
                <div className='mb-6'>
                    <div className='text-2xl md:text-3xl font-bold mb-3'>
                        Enterprise Resource Planning Transform Your Business with Powerful ERP Solutions
                    </div>
                    <div className='text-sm'>
                        We deliver end-to-end ERP systems tailored to your operations, integrating ERPNext
                        and custom-built modules to streamline workflows, improve efficiency, and give you
                        real-time insights for smarter decisions.Custom ERP Development, ERPNext Implementation & Expert Consultation.
                    </div>
                </div>


                <div className='mb-12'>
                    <a href="#contact-section" className="">
                        <button className='bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-md cursor-pointer hover:bg-primary/90'>
                            Let's Chat
                        </button>
                    </a>
                </div>

                <div>
                    <div >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Modules
                        </h1>
                    </div>

                    <AccountingModule />
                </div>

            </div>
        </div>
    )
}



const AccountingModule = () => {
    const keyFeatures = [
        "Multi-subsidiary, Multi-currency",
        "General ledger",
        "Accounts payable/receivable",
        "Financial statements",
        "Fixed assets",
        "Global tax and compliance"
    ];

    const detailedFeatures = [
        {
            id: 1,
            title: "Flexible chart of accounts",
            icon: <BarChart3 className="w-5 h-5" />
        },
        {
            id: 2,
            title: "Comprehensive general ledger",
            icon: <FileText className="w-5 h-5" />
        },
        {
            id: 3,
            title: "Manage billing, payables and receivables",
            icon: <DollarSign className="w-5 h-5" />
        },
        {
            id: 4,
            title: "Taxes and compliance",
            icon: <Shield className="w-5 h-5" />
        },
        {
            id: 5,
            title: "Cost centers, dimensions and budgeting",
            icon: <TrendingUp className="w-5 h-5" />
        },
        {
            id: 6,
            title: "Financial statements",
            icon: <FileText className="w-5 h-5" />
        },
        {
            id: 7,
            title: "Assets",
            icon: <BarChart3 className="w-5 h-5" />
        },
        {
            id: 8,
            title: "Account reconciliation",
            icon: <CheckCircle className="w-5 h-5" />
        },
        {
            id: 9,
            title: "Multi-company & multi-currency management",
            icon: <DollarSign className="w-5 h-5" />
        }
    ];

    return (
        <div className="">
            <div className="py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-2xl font-bold text-primary">
                            Accounting
                        </h2>

                        <div className="relative">
                            <img
                                src="https://frappe.io/files/image1f5eff.png"
                                alt="ERPNext Accounting Dashboard Interface"
                                className="w-full rounded-lg shadow-md"
                            />
                        </div>

                        <div className="text-primary leading-relaxed text-lg">
                            Maintaining accurate financial records is crucial—not just for statutory compliance,
                            but for a clear, real-time view of your organization's financial health. With ERPNext,
                            a fully open-source ERP software for accounting, you can streamline compliance,
                            reduce manual spreadsheet efforts, and minimize reliance on external auditors.
                            ERPNext transforms accounting by seamlessly integrating with inventory, manufacturing,
                            HR, and more—turning your ERP into a centralized financial hub.
                        </div>
                    </div>
                </div>

                {/* Key Features Grid */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-primary mb-6">
                        Key Capabilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {keyFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 cursor-pointer">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-primary font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Features</h3>
                <div >
                    {detailedFeatures.map((feature) => (
                        <div key={feature.id} className="flex items-center mb-2">
                            <div className=""><span className="font-semibold">{feature.id}</span> {feature.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-6">
                    Comprehensive General Ledger
                </h3>

                <p className="text-primary text-lg">
                    The general ledger is the foundation of every accounting report. In ERPNext,
                    every submitted accounting transaction—including those in Stock and Manufacturing—automatically
                    creates a GL entry, ensuring a comprehensive and flexible General Ledger report.
                </p>
                <p className="text-primary  text-lg mt-4">
                    This report lets you drill down into individual ledger postings, acting as a time machine
                    to trace and verify the impact of any transaction. Need deeper insights? Aggregate ledgers
                    for a customer to determine total receivables or analyze financials in a presentation
                    currency for international transactions—all within the General Ledger report.
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary">
                    Financial Statements
                </h3>

                <div >
                    <p className="text-primary text-lg">
                        ERPNext provides businesses with one-click access to real-time financial reports,
                        helping them make informed decisions with accurate financial data. The system offers
                        essential reports such as General Ledger (GL), Trial Balance (TB), Balance Sheet (BS),
                        Profit & Loss Statement (P&L), and Cash Flow Statements. Additionally, liquidity ratio
                        reports and financial performance indicators provide deeper insights into a company's
                        financial health.
                    </p>

                    <p className="text-primary text-lg">
                        These reports are fully customizable and exportable, allowing businesses to tailor
                        financial analytics to their needs. By providing up-to-date financial data in a
                        structured format, ERP software for accounting ensures businesses can analyze trends,
                        forecast financial performance, and stay ahead in decision-making.
                    </p>
                    <div className="mt-6">
                        <img
                            src="https://frappe.io/files/P&L%20V16%201ab954d.webp"
                            alt="Profit & Loss Statement Interface in ERPNext"
                            className="w-full mx-auto rounded-lg shadow-md border border-gray-200"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Index;