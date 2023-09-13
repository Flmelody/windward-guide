import "./less/statisticalTable.less"
export default {
    props: {
        title: {
            type: String,
            default: "Title"
        },
        headers: {
            type: Array,
            default: () => [
                "Column1",
            ]
        },
        rows: {
            type: Array,
            default: () => [
                [
                    "Row1",
                ]
            ]
        }
    },
    computed: {
        width() {
            return 100 / this.headers.length + "%"
        }
    },
    render() {
        return (
            <div class="statistical-container" >
                <div class="statistical-header" >
                    <div class="statistical-title" >
                        {this.title}
                    </div>
                    <div class="statistical-column" >
                        {
                            this.headers.map(header => (
                                <div class="statistical-tag" style={{
                                    width: this.width
                                }}>{header}</div>
                            ))
                        }
                    </div>
                </div>
                <div class="statistical-body">
                    {
                        this.rows.map(item => (
                            <div class="statistical-record" >
                                {
                                    item.map(value => (
                                        <div class="statistical-value" style={{
                                            width: this.width
                                        }}>{value}</div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}