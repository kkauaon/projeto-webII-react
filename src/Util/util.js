const timeAgo = timestamp => {
	const created = new Date(timestamp);
	const now = new Date();
	const diffSec = Math.floor((now - created) / 1000);
	if (isNaN(diffSec)) return timestamp;

	if (diffSec < 60) return 'há poucos segundos';
	
	const diffMin = Math.floor(diffSec / 60);
	if (diffMin < 60)
		return `há ${diffMin} ${diffMin > 1 ? 'minutos' : 'minuto'}`;
	
	const diffHours = Math.floor(diffMin / 60);
	if (diffHours < 24)
		return `há ${diffHours} ${diffHours > 1 ? 'horas' : 'hora'}`;

	const diffDays = Math.floor(diffHours / 24);
	
	if (diffDays === 1) {
		return `Ontem às ${created.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
	}
	if (diffDays === 2) {
		return `Anteontem às ${created.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
	}
	
	return `${created.toLocaleDateString('pt-BR')} às ${created.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
};

export { timeAgo };
